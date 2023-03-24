import { Router } from "express";
import { validateSchema } from "../middlewares/validateSchema.js";
import clientsSchema from "../schemas/clientsSchema.js";

const clientsRouter = Router();

clientsRouter.post("/clients", validateSchema(clientsSchema), () => {});
clientsRouter.get("/clients/:id/orders", () => {});

export default clientsRouter;
