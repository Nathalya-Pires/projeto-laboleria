import { db } from "../database/database.js";

export async function createOrder(req, res) {
  const { clientId, cakeId, quantity, price } = res.locals.order;
  console.log("entrou no orderController")
  // criar um middleware para fazer a verificação do clientid, cakeid e pegar o price da tabela cakes. nao esquecer de mudar para res.locals... depois de criar o arquivo middleware.

  try {

    const totalPrice = quantity * price;
    console.log(totalPrice);

    await db.query(
      `INSERT INTO orders ("clientId", "cakeId", quantity, "totalPrice") VALUES ($1, $2, $3, $4)`,
      [clientId, cakeId, quantity, totalPrice]
    );

    res.sendStatus(201)
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
}
