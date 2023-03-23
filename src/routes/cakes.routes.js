import { Router } from "express";
import { validateSchema } from "../middlewares/validateSchema.js";

const cakesRouter = Router();

cakesRouter.post("/cakes", validateSchema(), () => {});

export default cakesRouter;
