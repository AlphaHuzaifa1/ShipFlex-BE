import express, { Router } from "express";
import * as productController from "../../controllers/merchant/product.controller";
import { verifyMerchantToken } from "../../middleware/authMiddleware";
import { bodyValidator, queryValidator } from "../../middleware/joi";

const router: Router = express.Router();

router.post(
  "/",
  verifyMerchantToken,
  bodyValidator("createProductSchema"),
  productController.createProduct
);

router.get(
  "/",
  verifyMerchantToken,
  queryValidator("pagination"),
  productController.getProducts
);

router.get("/:id", verifyMerchantToken, productController.getProductById);

router.patch(
  "/:id",
  verifyMerchantToken,
  bodyValidator("updateProductSchema"),
  productController.updateProduct
);

router.delete("/:id", verifyMerchantToken, productController.deleteProduct);

export default router;
