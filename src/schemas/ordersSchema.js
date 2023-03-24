import joi from "joi";

const ordersSchema = joi.object({
  quantity: joi.number().integer().required(),
});

export default ordersSchema;
