import { simulated } from "../../lib/simulate.js";
import { fetchLtaDataMall, getCachedFormattedCarparks } from "../../lib/ltaGateway";

export default async function handler(req: any, res: any) {
  if (await simulated(req, res)) return;

  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");

  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  try {
    const carparkId = (req.query?.id || req.params?.id || "").toLowerCase();
    await fetchLtaDataMall();
    const cached = getCachedFormattedCarparks();
    const found = cached.find(
      (c: any) => c.id.toLowerCase() === carparkId || (c.carParkId && c.carParkId.toLowerCase() === carparkId)
    );

    if (!found) {
      return res.status(404).json({ error: "Carpark not found" });
    }

    res.status(200).json(found);
  } catch (error: any) {
    res.status(500).json({ error: error.message || "Failed to find carpark" });
  }
}
