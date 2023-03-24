import { Router } from "express";
import { validateSchema } from "../middlewares/validateSchema.js";
import ordersSchema from "../schemas/ordersSchema.js";

const ordersRouter = Router();

ordersRouter.post("/order", validateSchema(ordersSchema), () => {});
ordersRouter.get("/orders", () => {});
ordersRouter.get("/orders/:id", () => {});

export default ordersRouter;
