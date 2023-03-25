import joi from "joi";

const clientsSchema = joi.object({
  name: joi.string().required().min(3),
  address: joi.string().min(5).required(),
  phone: joi
    .string()
    .required()
    .pattern(/^[0-9]{10,11}$/),
});

export default clientsSchema;
