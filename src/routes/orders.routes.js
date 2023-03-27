import { Router } from "express";
import { createOrder, getOrders, getOrdersById } from "../controllers/orders.controller.js";
import { validateSchemaOrders } from "../middlewares/orders.middleware.js";


const ordersRouter = Router();

ordersRouter.post("/order", validateSchemaOrders, createOrder);
ordersRouter.get("/orders", getOrders);
ordersRouter.get("/orders/:id", getOrdersById);

export default ordersRouter;
