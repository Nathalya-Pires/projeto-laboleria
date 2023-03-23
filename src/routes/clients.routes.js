import { Router } from "express";
import { validateSchema } from "../middlewares/validateSchema.js";

const clientsRouter = Router();

clientsRouter.post("/clients", validateSchema(), () => {});
clientsRouter.get("/clients/:id/orders", validateSchema(), () => {});

export default clientsRouter;
