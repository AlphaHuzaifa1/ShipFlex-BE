import { Router } from "express";
import * as authController from "../../controllers/merchant/auth.controller";
import { bodyValidator, queryValidator } from "../../middleware/joi";
import { verifyMerchantToken } from "../../middleware/authMiddleware";
const router = Router();

router.post("/register", bodyValidator("register"), authController.register);

router.post(
  "/verify",
  queryValidator("authToken"),
  authController.verifyUserEmail
);

router.post("/login", bodyValidator("login"), authController.login);

router.put(
  "/profile",
  verifyMerchantToken,
  bodyValidator("profileUpdate"),
  authController.updateProfile
);

router.put(
  "/password",
  verifyMerchantToken,
  bodyValidator("passwordUpdate"),
  authController.updatePassword
);

router.post(
  "/forgot-password",
  bodyValidator("forgotPassword"),
  authController.forgotPassword
);

router.post(
  "/reset-password",
  queryValidator("authToken"),
  bodyValidator("resetPassword"),
  authController.resetPassword
);

export default router;
