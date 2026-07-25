import type { Request, Response } from "express";
import { userService } from "./user.service.js";

/*==========================
Create User 
===========================*/
const createUser = async (req: Request, res: Response) => {
  /*======================
  Destructure data from request body
  =======================*/

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

/*=================
Get All User
==================*/
const getAllUser = async (req: Request, res: Response) => {
  try {
    const result = await userService.getAllUserFromDB();
    res.status(200).json({
      success: true,
      message: "Users retrived successfully!",
      data: result.rows,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message,
      error: error,
    });
  }
};

/*===================
Get Single User 
====================*/

const getSingleUser = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const result = await userService.getSingleUserFromDB(id as string);
    if (result.rows.length === 0) {
      res.status(404).json({
        success: false,
        message: "User not found",
        data: {},
      });
    }
    res.status(200).json({
      success: true,
      message: "user found!",
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

/*===================
Update Single User 
====================*/

const updateSingleUser = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const result = await userService.updateSingleUserInDB(
      req.body,
      id as string,
    );
    if (result.rows.length === 0) {
      res.status(404).json({
        success: false,
        message: "User not found!",
        data: {},
      });
    }

    res.status(200).json({
      success: true,
      message: "User data updated!",
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

const deleteUserFromDB = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const result = await userService.deleteSingleUserInDB(id as string);
    if (result.rows.length === 0) {
      res.status(404).json({
        success: false,
        message: "User not found!",
        data: {},
      });
    }
    res.status(200).json({
      success: true,
      message: "User deleted successfully",
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
**********Export function for uses**************
====================================*/
export const userController = {
  createUser,
  getAllUser,
  getSingleUser,
  updateSingleUser,
  deleteUserFromDB,
};
