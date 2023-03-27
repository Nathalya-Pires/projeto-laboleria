import { db } from "../database/database.js";

export async function createClients(req, res) {
  const { name, address, phone } = req.body;

  try {
    await db.query(
      `INSERT INTO clients (name, address,phone) VALUES ($1, $2, $3)`,
      [name, address, phone]
    );

    res.sendStatus(201);
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
}

export async function getOrdersByClient(req, res) {
  const { id } = req.params;

  try {
    const result = await db.query(
      `SELECT json_build_object
    ('orderId', orders.id, 'quantity', orders.quantity, 'createdAt', TO_CHAR(orders."createdAt"::TIMESTAMP AT TIME ZONE 'UTC', 'YYYY-MM-DD HH24:MI'),
    'totalPrice', orders."totalPrice", 'cakeName', cakes.name) AS order
    FROM orders
    JOIN clients ON orders."clientId" = clients.id
    JOIN cakes ON orders."cakeId" = cakes.id
    WHERE clients.id = $1`,
      [id]
    );

    if (result.rowCount === 0) {
      res.status(404).send("Id do cliente não existe");
    } else {
      res.status(200).send(result.rows.map((row) => row.order));
    }
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
}
