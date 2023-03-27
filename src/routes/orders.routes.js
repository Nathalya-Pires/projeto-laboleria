import { Router } from "express";
import { createOrder, getOrders } from "../controllers/orders.controller.js";
import { validateSchemaOrders } from "../middlewares/orders.middleware.js";


const ordersRouter = Router();

ordersRouter.post("/order", validateSchemaOrders, createOrder);
ordersRouter.get("/orders", getOrders);
ordersRouter.get("/orders/:id", () => {});

export default ordersRouter;
