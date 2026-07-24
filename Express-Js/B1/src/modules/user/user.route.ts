import { Router } from "express";
import { userController } from "./user.controller.js";

const router = Router();

/*=====================
Create User Route
=======================*/
router.post("/", userController.createUser);

/*====================
Export userRoute 
=====================*/

export const userRoute = router;
