import Joi from "joi";

const createAddressSchema = Joi.object({
  nickname: Joi.string().trim().allow(null, "").max(100).optional(),
  company_name: Joi.string().trim().required().max(100).messages({
    "any.required": "Company name is required",
    "string.empty": "Company name is not allowed to be empty",
  }),
  contact_name: Joi.string().trim().required().max(100).messages({
    "any.required": "Contact name is required",
    "string.empty": "Contact name is not allowed to be empty",
  }),
  contact_number: Joi.string().trim().required().max(50).messages({
    "any.required": "Contact number is required",
    "string.empty": "Contact number is not allowed to be empty",
  }),
  email: Joi.string().trim().email().required().max(100).messages({
    "any.required": "Email is required",
    "string.email": "Enter a valid email address",
    "string.empty": "Email is not allowed to be empty",
  }),
  country: Joi.string().trim().required().max(100).messages({
    "any.required": "Country is required",
    "string.empty": "Country is not allowed to be empty",
  }),
  address_line_1: Joi.string().trim().required().messages({
    "any.required": "Address Line 1 is required",
    "string.empty": "Address Line 1 is not allowed to be empty",
  }),
  address_line_2: Joi.string().trim().allow(null, "").optional(),
  postal_code: Joi.string().trim().required().max(20).messages({
    "any.required": "Postal code is required",
    "string.empty": "Postal code is not allowed to be empty",
  }),
  province: Joi.string().trim().allow(null, "").max(100).optional(),
  city: Joi.string().trim().required().max(100).messages({
    "any.required": "City is required",
    "string.empty": "City is not allowed to be empty",
  }),
});

const updateAddressSchema = Joi.object({
  nickname: Joi.string().trim().allow(null, "").max(100).optional(),
  company_name: Joi.string().trim().max(100).optional(),
  contact_name: Joi.string().trim().max(100).optional(),
  contact_number: Joi.string().trim().max(50).optional(),
  email: Joi.string().trim().email().max(100).optional(),
  country: Joi.string().trim().max(100).optional(),
  address_line_1: Joi.string().trim().optional(),
  address_line_2: Joi.string().trim().allow(null, "").optional(),
  postal_code: Joi.string().trim().max(20).optional(),
  province: Joi.string().trim().allow(null, "").max(100).optional(),
  city: Joi.string().trim().max(100).optional(),
}).min(1);

const updateAddressFlagsSchema = Joi.object({
  default_ship_address: Joi.boolean().required().messages({
    "any.required": "Default ship address is required",
  }),
  default_return_address: Joi.boolean().required().messages({
    "any.required": "Default return address is required",
  }),
});

export const addressSchemas = {
  createAddressSchema,
  updateAddressSchema,
  updateAddressFlagsSchema,
};
