import { Router } from "express";
import { createCake } from "../controllers/cakes.controller.js";
import { validateSchema } from "../middlewares/validateSchema.js";
import cakesSchema from "../schemas/cakesSchema.js";

const cakesRouter = Router();

cakesRouter.post("/cakes", validateSchema(cakesSchema), createCake );

export default cakesRouter;


