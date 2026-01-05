import express, { Request, Response, Router } from "express";
import merchantRoutes from "./merchant/index";
import staffRoutes from "./staff/index";

const router: Router = express.Router();

router.get("/", (_req: Request, res: Response) => {
  return res.status(200).json({
    message: "API is working",
    response: {
      version: "1.0.0",
    },
    error: null,
  });
});

router.use("/merchant", merchantRoutes);
router.use("/staff", staffRoutes);

export default router;
