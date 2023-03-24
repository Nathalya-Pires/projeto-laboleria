import { Router } from "express";
import { validateSchema } from "../middlewares/validateSchema.js";
import cakesSchema from "../schemas/cakesSchema.js";

const cakesRouter = Router();

cakesRouter.post("/cakes", validateSchema(cakesSchema), () => {});

export default cakesRouter;
