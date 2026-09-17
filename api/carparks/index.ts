import { simulated } from "../../lib/simulate.js";
import { fetchLtaDataMall, getCachedFormattedCarparks } from "../../lib/ltaGateway";

export default async function handler(req: any, res: any) {
  if (await simulated(req, res)) return;

  // CORS headers
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");

  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  try {
    const { area, category, evOnly, q } = req.query || {};
    await fetchLtaDataMall();

    let list = getCachedFormattedCarparks();

    if (q && typeof q === "string") {
      const search = q.toLowerCase();
      list = list.filter((c: any) => c.name.toLowerCase().includes(search) || c.address.toLowerCase().includes(search));
    }
    if (area && typeof area === "string" && area !== "All") {
      list = list.filter((c: any) => c.area === area);
    }
    if (category && typeof category === "string" && category !== "all") {
      list = list.filter((c: any) => c.category === category);
    }
    if (evOnly === "true") {
      list = list.filter((c: any) => c.hasEV);
    }

    res.status(200).json({
      timestamp: new Date().toISOString(),
      total: list.length,
      carparks: list,
    });
  } catch (error: any) {
    res.status(500).json({ error: error.message || "Failed to fetch carparks" });
  }
}
