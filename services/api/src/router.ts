import { Response, Router } from "express";
import exampleRouter from "./example";

const healthHandler = (_, res: Response): Response =>
  res.status(200).send("OK");

export function newRouter(): Router {
  const router = Router();

  router.use("/example", exampleRouter);
  router.get("/health", healthHandler);

  return router;
}
