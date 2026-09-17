import express from "express";
import path from "path";
import dotenv from "dotenv";
import { createServer as createViteServer } from "vite";
import healthHandler from "./api/health";
import carparksHandler from "./api/carparks/index";
import carparksLiveHandler from "./api/carparks/live";
import carparksRefreshHandler from "./api/carparks/refresh";
import carparkDetailHandler from "./api/carparks/[id]";
import statsHandler from "./api/stats";
import keysHandler from "./api/keys";
import { fetchLtaDataMall } from "./lib/ltaGateway";

dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json());

// Enable CORS for all cross-origin requests, health checks, and preflights
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS, HEAD");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization, AccountKey");
  if (req.method === "OPTIONS") {
    return res.sendStatus(200);
  }
  next();
});

// Connect all serverless APIs through the codes in the api folder
app.all("/api/health", (req, res) => healthHandler(req, res));
app.all("/health", (req, res) => healthHandler(req, res));

app.get("/api/carparks", (req, res) => carparksHandler(req, res));
app.get("/api/carparks/live", (req, res) => carparksLiveHandler(req, res));
app.post("/api/carparks/refresh", (req, res) => carparksRefreshHandler(req, res));
app.get("/api/carparks/:id", (req, res) => carparkDetailHandler(req, res));
app.get("/api/stats", (req, res) => statsHandler(req, res));
app.get("/api/keys", (req, res) => keysHandler(req, res));

async function startServer() {
  // Pre-fetch LTA data on server boot
  fetchLtaDataMall().catch((e) => console.warn("Initial LTA prefetch note:", e));

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Live Carpark Server running on http://localhost:${PORT}`);
  });
}

startServer();
