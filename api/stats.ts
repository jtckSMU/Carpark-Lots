import { simulated } from "../lib/simulate.js";
import { fetchLtaDataMall, getCachedFormattedCarparks } from "../lib/ltaGateway";

export default async function handler(req: any, res: any) {
  if (await simulated(req, res)) return;

  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");

  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  try {
    await fetchLtaDataMall();
    const cached = getCachedFormattedCarparks();
    const totalCarparks = cached.length;
    const totalAvailableLots = cached.reduce((sum: number, c: any) => sum + (c.availableLots || 0), 0);
    const evReadyCount = cached.filter((c: any) => c.hasEV).length;
    const hdbCount = cached.filter((c: any) => c.agency === "HDB").length;
    const uraCount = cached.filter((c: any) => c.agency === "URA").length;
    const ltaCount = cached.filter((c: any) => c.agency === "LTA").length;

    res.status(200).json({
      timestamp: new Date().toISOString(),
      totalCarparks,
      totalAvailableLots,
      evReadyCount,
      breakdown: {
        HDB: hdbCount,
        URA: uraCount,
        LTA: ltaCount,
      },
    });
  } catch (error: any) {
    res.status(500).json({ error: error.message || "Failed to get stats" });
  }
}
