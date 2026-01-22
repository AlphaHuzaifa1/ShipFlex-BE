import { merchantSchemas } from "./merchant/auth";
import { productSchemas } from "./merchant/products";
import { paginationSchema } from "./common";

export default {
  ...merchantSchemas,
  ...productSchemas,
  pagination: paginationSchema,
};
