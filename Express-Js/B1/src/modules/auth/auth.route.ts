import { Router } from "express";
import { authController } from "./auth.controller.js";

const router = Router();

router.post("/login", authController.loginUser);

/*==========================
**********Export profileRoute for Uses***********
===========================*/
export const authRoute = router;
