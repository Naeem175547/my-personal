import express from "express";
import userRouter from "./user.router.js";
import repoRouter from "./repo.router.js";
const mainRouter = express.Router();

mainRouter.use(userRouter);
mainRouter.use(repoRouter);

mainRouter.get("/", (req, res) => {
  res.send("home");
});

export default mainRouter;
