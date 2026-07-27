import { Router } from "express";
import { profileController } from "./profile.controller.js";

const router = Router();

/*=====================
Create profile Route
=======================*/

router.post("/", profileController.createProfle);


/*==========================
**********Export profileRoute for Uses***********
===========================*/

export const profileRoute = router;
