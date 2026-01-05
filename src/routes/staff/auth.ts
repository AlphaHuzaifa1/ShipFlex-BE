import { Router } from "express";
import { login } from "../../controllers/staff/auth.controller";
import { bodyValidator } from "../../middleware/joi";
const router = Router();

router.post("/login", bodyValidator("login"), login);

export default router;
