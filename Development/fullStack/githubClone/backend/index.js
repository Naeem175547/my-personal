import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import mongoose from "mongoose";
import http from "http";
import { Server } from "socket.io";
import mainRouter from "./routers/main.router.js";

import yargs from "yargs";
import { hideBin } from "yargs/helpers";
import { initRepo } from "./controllers/init.js";
import { addRepo } from "./controllers/add.js";
import { commitRepo } from "./controllers/commit.js";
import { revertRepo } from "./controllers/revert.js";
import { pullRepo } from "./controllers/pull.js";
import { pushRepo } from "./controllers/push.js";

dotenv.config();

yargs(hideBin(process.argv))
  .command("start", "Starts a new server", {}, startServer)
  .command("init", "Initialise a new repository", {}, initRepo)
  .command(
    "add <file>",
    "Add a file to the staging area",
    (yargs) => {
      yargs.positional("file", {
        describe: "File to add",
        type: "string",
      });
    },
    (argv) => {
      addRepo(argv.file);
    },
  )
  .command(
    "commit <message>",
    "Commit the staged files",
    (yargs) => {
      yargs.positional("message", {
        describe: "Commit message",
        type: "string",
      });
    },
    (argv) => {
      commitRepo(argv.message);
    },
  )
  .command("push", "Push commits to S3", {}, pushRepo)
  .command("pull", "Pull commits from S3", {}, pullRepo)
  .command(
    "revert <commitId>",
    "Revert to a specific commit",
    (yargs) => {
      yargs.positional("commitId", {
        describe: "Commit ID",
        type: "string",
      });
    },
    (argv) => {
      revertRepo(argv.commitId);
    },
  )
  .demandCommand(1, "You need at least one command.")
  .help().argv;

function startServer() {
  const app = express();
  const port = process.env.PORT || 3000;

  // Middleware
  // app.use(cors());
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
  const mongoURI = process.env.MONGODB_URI;

  mongoose
    .connect(mongoURI)
    .then(() => {
      console.log("MongoDB Connected");
    })
    .catch((err) => {
      console.error("Unable to connect:", err);
    });

  const db = mongoose.connection;

  db.once("open", async () => {
    console.log("CRUD operations called");
  });

  // HTTP Server
  const httpServer = http.createServer(app);

  // Socket.IO
  const io = new Server(httpServer, {
    cors: {
      origin: "*",
      methods: ["GET", "POST"],
    },
  });

  io.on("connection", (socket) => {
    console.log(`Client Connected: ${socket.id}`);

    socket.on("joinRoom", (userId) => {
      const user = userId;

      console.log("====");
      console.log("User:", user);
      console.log("Socket:", socket.id);
      console.log("====");

      socket.join(userId);
    });

    socket.on("disconnect", () => {
      console.log(`Client Disconnected: ${socket.id}`);
    });
  });

  httpServer.listen(port, () => {
    console.log(`Server is running on PORT ${port}`);
  });
}
