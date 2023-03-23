import { Router } from "express";
import { validateSchema } from "../middlewares/validateSchema.js";

const ordersRouter = Router();

ordersRouter.post("/order", validateSchema(), () => {});
ordersRouter.get("/orders", validateSchema(), () => {});
ordersRouter.get("/orders/:id", validateSchema(), () => {});

export default ordersRouter;
