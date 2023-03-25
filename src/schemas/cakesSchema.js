import joi from "joi";

const cakesSchema = joi.object({
  name: joi.string().required().min(2),
  price: joi.number().positive().required(),
  description: joi.string().optional().allow(null),
  image: joi
    .string()
    .uri({ scheme: ["http", "https"] })
    .required(),
});

export default cakesSchema;
