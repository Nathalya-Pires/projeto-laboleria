import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import cakesRouter from "./routes/cakes.routes.js";
import clientsRouter from "./routes/clients.routes.js";
import ordersRouter from "./routes/orders.routes.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.use([cakesRouter,clientsRouter,ordersRouter]);

const port = process.env.PORT;
app.listen(port, () => console.log(`Servidor rodando na porta: ${port}`));
