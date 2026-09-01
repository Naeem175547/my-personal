import registerCommand from "./gitHandler/gitCommad.js";
import yargs from "yargs";
import { hideBin } from "yargs/helpers";
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import http from "http";
import dotenv from "dotenv";
import mainRouter from "./routers/main.router.js";

dotenv.config();

registerCommand(yargs(hideBin(process.argv)))
  .command("start", "Starts a new server", {}, startServer)
  .help()
  .demandCommand(1, "At least one command").argv;

function startServer() {
  const app = express();
  const port = process.env.PORT || 3000;

  // Create HTTP Server
  const httpServer = http.createServer(app);

  // Middleware
  app.use(
    cors({
      origin: "*",
    }),
  );

  app.use(express.json());

  app.use(mainRouter);

  // Home Route
  app.get("/", (req, res) => {
    res.send("Welcome!");
  });

  // MongoDB Connection
  mongoose
    .connect(process.env.MONGODB_URI)
    .then(() => {
      console.log("MongoDB Connected");
    })
    .catch((err) => {
      console.error("Unable to connect:", err);
    });

  // Start Server
  httpServer.listen(port, () => {
    console.log(`Server is running on PORT ${port}`);
  });
}
