import { Router } from "express";
import { createClients } from "../controllers/clients.controller.js";
import { validateSchema } from "../middlewares/validateSchema.js";
import clientsSchema from "../schemas/clientsSchema.js";

const clientsRouter = Router();

clientsRouter.post("/clients", validateSchema(clientsSchema), createClients);
clientsRouter.get("/clients/:id/orders", () => {});

export default clientsRouter;
