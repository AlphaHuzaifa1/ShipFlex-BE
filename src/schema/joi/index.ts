import { merchantSchemas } from "./merchant/auth";
import { productSchemas } from "./merchant/products";
import { paginationSchema } from "./common";
import { addressSchemas } from "./merchant/address";

export default {
  ...merchantSchemas,
  ...productSchemas,
  ...addressSchemas,
  pagination: paginationSchema,
};
