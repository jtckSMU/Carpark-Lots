import { simulated } from "../../lib/simulate.js";
import { fetchLtaDataMall } from "../../lib/ltaGateway";

export default async function handler(req: any, res: any) {
  if (await simulated(req, res)) return;

  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");

  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  try {
    const rawData = await fetchLtaDataMall();
    const carLotsOnly = rawData.filter((r) => r.LotType === "C" || !r.LotType);

    res.status(200).json({
      timestamp: new Date().toISOString(),
      count: rawData.length,
      carLotsCount: carLotsOnly.length,
      data: carLotsOnly,
    });
  } catch (error: any) {
    res.status(500).json({ error: error.message || "Failed to fetch LTA DataMall" });
  }
}
