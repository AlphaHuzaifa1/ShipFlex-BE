import { Router } from "express";
import authRoutes from "./auth";
import productRoutes from "./product";
import addressRoutes from "./address";

const router = Router();

router.use("/auth", authRoutes);
router.use("/products", productRoutes);
router.use("/address", addressRoutes);

export default router;
