import { db } from "../database/database.js";

export async function createCake(req, res) {
  const { name, price, description, image } = req.body;

  try {
    const cakeExist = await db.query(`SELECT * FROM cakes WHERE name = $1`, [
      name,
    ]);

    console.log(cakeExist);

    if (cakeExist.rowCount !== 0) return res.sendStatus(409);

    await db.query(
      `INSERT INTO cakes (name, price, description, image) VALUES ($1, $2, $3, $4)`,
      [name, price, description, image]
    );

    res.sendStatus(201);
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
}
 
//commitar
