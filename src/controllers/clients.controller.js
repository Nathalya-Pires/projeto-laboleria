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
