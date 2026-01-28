import express, { Router } from "express";
import * as addressController from "../../controllers/merchant/address.controller";
import { verifyMerchantToken } from "../../middleware/authMiddleware";
import { bodyValidator, queryValidator } from "../../middleware/joi";

const router: Router = express.Router();

router.post(
  "/",
  verifyMerchantToken,
  bodyValidator("createAddressSchema"),
  addressController.createAddress,
);

router.get(
  "/",
  verifyMerchantToken,
  queryValidator("pagination"),
  addressController.getAddresses,
);

router.get("/:id", verifyMerchantToken, addressController.getAddressById);

router.patch(
  "/:id",
  verifyMerchantToken,
  bodyValidator("updateAddressSchema"),
  addressController.updateAddress,
);

router.patch(
  "/:id/flags",
  verifyMerchantToken,
  bodyValidator("updateAddressFlagsSchema"),
  addressController.updateAddressFlags,
);

router.delete("/:id", verifyMerchantToken, addressController.deleteAddress);

export default router;
