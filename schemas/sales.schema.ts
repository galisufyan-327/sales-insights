import Joi from "joi";

const salesSchema = Joi.array()
  .min(1)
  .items(
    Joi.object({
      name: Joi.string().required(),
      email: Joi.string().email().required(),
      product: Joi.string().required(),
      category: Joi.string().required(),
      amount: Joi.number().positive().required(),
      date: Joi.string().required(),
      state: Joi.string().required(),
    })
  );

export { salesSchema };
