import type { Request, Response } from "express";
import { userService } from "./user.service.js";

const createUser = async (req: Request, res: Response) => {
  /*======================
  Destructure data from request body
  =======================*/
  //   const { name, email, password, age, is_active } = req.body;

  try {
    const result = await userService.createUserInDB(req.body);

    /*====================================
     Send newly created user as response
    ====================================*/
    res.status(201).json({
      message: "✅ User created successfully!",
      data: result.rows[0],
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message,
      error: error,
    });
  }
};

/*====================================
  Export function for uses
====================================*/
export const userController = { createUser };
