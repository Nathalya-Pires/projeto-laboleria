import { db } from "../database/database.js";

export async function getOrders(req, res) {
  const { date } = req.query;

  try {
    let query = `SELECT json_build_object(
        'client', json_build_object(
          'id', clients.id,'name', clients.name,'address', clients.address,'phone', clients.phone
        ),
        'cake', json_build_object(
          'id', cakes.id, 'name', cakes.name, 'price', cakes.price, 'description', cakes.description, 'image', cakes.image
        ),
        'createdAt', TO_CHAR(orders."createdAt"::TIMESTAMP AT TIME ZONE 'UTC', 'YYYY-MM-DD HH24:MI:SS'),
        'quantity', orders.quantity, 'totalPrice', orders."totalPrice"
        ) AS order_details
      FROM orders
      JOIN clients ON orders."clientId" = clients.id
      JOIN cakes ON orders."cakeId" = cakes.id
    `;

    const queryParams = [];

    if (date) {
      query += `WHERE DATE(orders."createdAt") = $1`;
      queryParams.push(date);
    }

    const orders = await db.query(query, queryParams);

    if (orders.rowCount === 0) {
      res.status(404).send([]);
    } else {
      res.status(200).send(orders.rows.map((order) => order.order_details));
    }
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
}

export async function createOrder(req, res) {
  const { clientId, cakeId, quantity, price } = res.locals.order;
  // console.log("entrou no orderController");

  try {
    const totalPrice = quantity * price;
    // console.log(totalPrice);

    await db.query(
      `INSERT INTO orders ("clientId", "cakeId", quantity, "createdAt", "totalPrice") VALUES ($1, $2, $3, now(), $4)`,
      [clientId, cakeId, quantity, totalPrice]
    );

    res.sendStatus(201);
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
}
