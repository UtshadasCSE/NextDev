import { Router } from "express";
import { userController } from "./user.controller.js";

const router = Router();

/*=====================
Create User Route
=======================*/
router.post("/", userController.createUser);

/*=====================
Get User Route
=======================*/
router.get("/", userController.getAllUser);

/*=====================
Get Single user via ID
=======================*/
router.get("/:id", userController.getSingleUser);

/*=====================
Update single user via ID
=======================*/
router.put("/:id", userController.updateSingleUser);

/*=====================
Delete single user via ID
=======================*/
router.delete("/:id", userController.deleteUserFromDB);

/*====================
*****Export userRoute******
=====================*/
export const userRoute = router;
