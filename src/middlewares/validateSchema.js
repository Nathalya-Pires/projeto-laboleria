export function validateSchema(schema) {
  return (req, res, next) => {
    const { error } = schema.validate(req.body, { abortEarly: false });

    if (error) {
      const imageError = error.details.find((error) =>
        error.path.includes("image")
      );
      if (imageError) {
        return res.status(422).send(imageError.message);
      }
    }

    if (error) {
      return res
        .status(400)
        .send(error.details.map((detail) => detail.message));
    }

    next();
  };
}
