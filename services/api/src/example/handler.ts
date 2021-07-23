import { Request, Response } from "express";
import { Example } from "./model";
import { serializeExample } from "./serializer";

export const getExamples = async (_: Request, res: Response) => {
  const items = await Example.findAll();

  res.status(200).json(items.map(serializeExample));
};
