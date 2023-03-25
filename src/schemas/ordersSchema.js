import joi from "joi";

const ordersSchema = joi.object({
  clientId:joi.number().integer().required(),
  cakeId:joi.number().integer().required(),
  quantity: joi.number().integer().greater(0).max(4).required(),
});

export default ordersSchema;
