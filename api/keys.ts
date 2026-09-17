import { simulated } from "../lib/simulate.js";
import { LTA_ACCOUNT_KEY } from "../lib/ltaGateway";

export default async function handler(req: any, res: any) {
  if (await simulated(req, res)) return;

  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");

  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  const maskKey = (key?: string) => {
    if (!key || key.length < 6) return null;
    return `${key.slice(0, 3)}***${key.slice(-4)}`;
  };

  res.status(200).json({
    status: "ok",
    services: {
      ltaDataMall: {
        configured: Boolean(LTA_ACCOUNT_KEY),
        activeKeyMasked: maskKey(LTA_ACCOUNT_KEY),
        mode: "serverless-proxy",
      },
      gemini: {
        configured: Boolean(process.env.GEMINI_API_KEY),
        mode: "serverless",
      },
      simulation: {
        allowed: process.env.ALLOW_SIMULATE === "true",
      },
    },
    timestamp: new Date().toISOString(),
  });
}
