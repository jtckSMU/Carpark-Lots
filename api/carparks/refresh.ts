import { simulated } from "../../lib/simulate.js";
import { fetchLtaDataMall, getCachedFormattedCarparks } from "../../lib/ltaGateway";

export default async function handler(req: any, res: any) {
  if (await simulated(req, res)) return;

  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");

  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  try {
    await fetchLtaDataMall(true);
    const cached = getCachedFormattedCarparks();
    res.status(200).json({
      success: true,
      timestamp: new Date().toISOString(),
      total: cached.length,
    });
  } catch (error: any) {
    res.status(500).json({ error: error.message || "Failed to refresh carparks" });
  }
}
