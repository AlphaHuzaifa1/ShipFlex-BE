import Joi from "joi";

const createProductSchema = Joi.object({
  sku: Joi.string().trim().allow(null, "").max(100).messages({
    "string.max": "SKU must be at most 100 characters long",
  }),
  description: Joi.string().trim().required().messages({
    "any.required": "Description is required",
    "string.empty": "Description is not allowed to be empty",
  }),
  length: Joi.number().precision(2).min(0).allow(null).optional().messages({
    "number.base": "Length must be a number",
    "number.min": "Length must be at least 0",
  }),
  width: Joi.number().precision(2).min(0).allow(null).optional().messages({
    "number.base": "Width must be a number",
    "number.min": "Width must be at least 0",
  }),
  height: Joi.number().precision(2).min(0).allow(null).optional().messages({
    "number.base": "Height must be a number",
    "number.min": "Height must be at least 0",
  }),
  weight: Joi.number().precision(2).min(0).allow(null).optional().messages({
    "number.base": "Weight must be a number",
    "number.min": "Weight must be at least 0",
  }),
  category_hs_code: Joi.string()
    .trim()
    .allow(null, "")
    .max(100)
    .optional()
    .messages({
      "string.max": "Category HS Code must be at most 100 characters long",
    }),
  country_of_origin: Joi.string()
    .trim()
    .allow(null, "")
    .max(100)
    .optional()
    .messages({
      "string.max": "Country of Origin must be at most 100 characters long",
    }),
  pick_location: Joi.string()
    .trim()
    .allow(null, "")
    .max(100)
    .optional()
    .messages({
      "string.max": "Pick Location must be at most 100 characters long",
    }),
  source: Joi.string()
    .valid("manual", "tiktok", "shopify")
    .default("manual")
    .optional()
    .messages({
      "any.only": "Source must be 'manual', 'tiktok', or 'shopify'",
    }),
  external_id: Joi.string()
    .trim()
    .allow(null, "")
    .max(100)
    .optional()
    .messages({
      "string.max": "External ID must be at most 100 characters long",
    }),
});

const updateProductSchema = Joi.object({
  sku: Joi.string()
    .trim()
    .allow(null, "")
    .max(100)
    .optional()
    .messages({
      "string.max": "SKU must be at most 100 characters long",
    }),
  description: Joi.string().trim().min(1).optional().messages({
    "string.min": "Description must be at least 1 character long",
  }),
  length: Joi.number().precision(2).min(0).allow(null).optional().messages({
    "number.base": "Length must be a number",
    "number.min": "Length must be at least 0",
  }),
  width: Joi.number().precision(2).min(0).allow(null).optional().messages({
    "number.base": "Width must be a number",
    "number.min": "Width must be at least 0",
  }),
  height: Joi.number().precision(2).min(0).allow(null).optional().messages({
    "number.base": "Height must be a number",
    "number.min": "Height must be at least 0",
  }),
  weight: Joi.number().precision(2).min(0).allow(null).optional().messages({
    "number.base": "Weight must be a number",
    "number.min": "Weight must be at least 0",
  }),
  category_hs_code: Joi.string().trim().allow(null, "").max(100).optional().messages({
    "string.max": "Category HS Code must be at most 100 characters long",
  }),
  country_of_origin: Joi.string().trim().allow(null, "").max(100).optional().messages({
    "string.max": "Country of Origin must be at most 100 characters long",
  }),
  pick_location: Joi.string().trim().allow(null, "").max(100).optional().messages({
    "string.max": "Pick Location must be at most 100 characters long",
  }),
}).min(1);

export const productSchemas = {
  createProductSchema,
  updateProductSchema,
};
