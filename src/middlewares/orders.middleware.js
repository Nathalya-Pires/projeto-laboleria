import { db } from "../database/database.js";
import ordersSchema from "../schemas/ordersSchema.js";

export async function validateSchemaOrders(req, res, next) {
  const order = req.body;

  const { error } = ordersSchema.validate(order);

  if (error) {
    const errors = error.details.map((detail) => detail.message);
    return res.status(400).send({ errors });
  }

  const idExists = await db.query(`SELECT * FROM clients WHERE id = $1`, [
    order.clientId,
  ]);
  const cakeIdExists = await db.query(`SELECT * FROM cakes WHERE id = $1`, [
    order.cakeId,
  ]);

  if (idExists.rowCount === 0 || cakeIdExists.rowCount === 0)
    return res.status(404).send("Id não encontrado");

  const consultPrice = await db.query(`SELECT price FROM cakes WHERE id = $1`, [
    order.cakeId,
  ]);
  const price = consultPrice.rows[0].price;
  // console.log(price);

  res.locals.order = { ...order, price };

  next();
}
