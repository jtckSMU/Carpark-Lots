import { simulated } from "../lib/simulate.js";
import { probeHealth, getCachedFormattedCarparks, getLastCacheTime, LTA_API_URL } from "../lib/ltaGateway";
import { STATUS } from "../src/utils/fetchState";

export default async function handler(req: any, res: any) {
  // Allow preflight / CORS
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS, HEAD");
  res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization, AccountKey");

  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  try {
    const forceProbe = req.query?.probe === "true" || req.query?.live === "true" || req.query?.force === "true";
    const lastHealthProbe = await probeHealth(forceProbe);
    const state = lastHealthProbe.state;
    const httpStatus = STATUS[state] || 200;
    const cachedCarparks = getCachedFormattedCarparks();
    const lastCacheTime = getLastCacheTime();

    res.status(httpStatus).json({
      state,
      status: state === "ok" ? "ok" : state,
      service: "Singapore Live Carpark & EV Gateway",
      api: LTA_API_URL,
      upstream: lastHealthProbe.upstream,
      latencyMs: lastHealthProbe.ms,
      cachedCarparksCount: cachedCarparks.length,
      lastUpdated: lastCacheTime > 0 ? new Date(lastCacheTime).toISOString() : null,
      simulateAllowed: process.env.ALLOW_SIMULATE === "true",
      ...(lastHealthProbe.reason ? { reason: lastHealthProbe.reason } : {}),
      ...(lastHealthProbe.warning ? { warning: lastHealthProbe.warning } : {}),
    });
  } catch (err: any) {
    const state = "unreachable";
    const httpStatus = STATUS[state] || 504;
    res.status(httpStatus).json({
      state,
      status: "error",
      reason: err?.message || "Health check encountered an error",
      upstream: 504,
      cachedCarparksCount: getCachedFormattedCarparks().length,
      lastUpdated: getLastCacheTime() > 0 ? new Date(getLastCacheTime()).toISOString() : null,
      simulateAllowed: process.env.ALLOW_SIMULATE === "true",
    });
  }
}
