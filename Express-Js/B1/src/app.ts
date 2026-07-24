import express, {
  type Application,
  type Request,
  type Response,
} from "express";

import { pool } from "./db/index.js";
import { userRoute } from "./modules/user/user.route.js";

/*=================
Create Express application
===================*/
const app: Application = express();

/*=======================
MIDDLEWARES Parse incoming JSON, Plain text and form-urlencoded data
=========================*/
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/users", userRoute);

/*=====================
GET Home Route
======================*/
app.get("/", (req: Request, res: Response): void => {
  res.status(200).json({
    message: "✅ Server is running smoothly!",
  });
});

/*=====================
Get all User Route
=======================*/
app.get("/api/users", async (req: Request, res: Response) => {
  try {
    const result = await pool.query(`
      SELECT * FROM users`);
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
});

/*=====================
Get Single user via ID
=======================*/
app.get("/api/users/:id", async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const result = await pool.query(`SELECT * FROM users WHERE id=$1`, [id]);
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
});

/*=====================
Update single user via ID
=======================*/
app.put("/api/users/:id", async (req: Request, res: Response) => {
  const { id } = req.params;
  const { name, email, password, age } = req.body;

  try {
    const result = await pool.query(
      `UPDATE users set 
      name=COALESCE($1,name), 
      email=COALESCE($2,email), 
      password=$3, 
      age=$4 
      WHERE id=$5 RETURNING *`,
      [name, email, password, age],
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
});

/*=====================
Delete single user via ID
=======================*/
app.delete("/api/users/:id", async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const result = await pool.query(
      `
      DELETE FROM users
      WHERE id = $1`,
      [id],
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
});

export default app;
