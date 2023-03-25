import { Router } from "express";
import { createOrder } from "../controllers/orders.controller.js";
import { validateSchemaOrders } from "../middlewares/orders.middleware.js";


const ordersRouter = Router();

ordersRouter.post("/order", validateSchemaOrders, createOrder);
ordersRouter.get("/orders", () => {});
ordersRouter.get("/orders/:id", () => {});

export default ordersRouter;
