import { json } from "body-parser";
import * as express from "express";
import { newRouter } from "./router";

export const newServer = (): Promise<express.Express> =>
  Promise.resolve(
    express()
      .use(json())
      .use(newRouter())
  );