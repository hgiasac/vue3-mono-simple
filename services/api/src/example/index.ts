import { Router } from "express";
import { getExamples } from "./handler";

const router = Router();

router.get("/", getExamples);

export default router;
