import express from "express";
import repoController from "../controllers/repoController.js";

const repoRouter = express.Router();
repoRouter.post("/repo/create", repoController.createRepository);
repoRouter.get("/repo/all", repoController.getAllRepositories);

repoRouter.get("/repo/name/:name", repoController.fetchRepositoryByName);
repoRouter.get(
  "/repo/user/:userId",
  repoController.fetchRepositoryForCurrentUser,
);
repoRouter.get("/repo/:id", repoController.fetchRepositoryById);
repoRouter.delete("/repo/delete/:id", repoController.deleteRepositoryById);
repoRouter.put("/repo/update/:id", repoController.updateRepositoryById);
repoRouter.put("/repo/update/:id", repoController.updateRepositoryById);

export default repoRouter;
