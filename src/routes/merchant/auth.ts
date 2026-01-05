import { Router } from "express";
import {
  login,
  register,
  verifyUserEmail,
  updateProfile,
  updatePassword,
  forgotPassword,
  resetPassword,
} from "../../controllers/merchant/auth.controller";
import { bodyValidator, queryValidator } from "../../middleware/joi";
import { verifyMerchantToken } from "../../middleware/authMiddleware";
const router = Router();

router.post("/register", bodyValidator("register"), register);

router.post("/verify", queryValidator("authToken"), verifyUserEmail);

router.post("/login", bodyValidator("login"), login);

router.put(
  "/profile",
  verifyMerchantToken,
  bodyValidator("profileUpdate"),
  updateProfile
);

router.put(
  "/password",
  verifyMerchantToken,
  bodyValidator("passwordUpdate"),
  updatePassword
);

router.post(
  "/forgot-password",
  bodyValidator("forgotPassword"),
  forgotPassword
);

router.post(
  "/reset-password",
  queryValidator("authToken"),
  bodyValidator("resetPassword"),
  resetPassword
);

export default router;
