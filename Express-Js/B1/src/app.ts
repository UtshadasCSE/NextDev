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

/*=====================
GET Home Route
======================*/
app.get("/", (req: Request, res: Response): void => {
  res.status(200).json({
    message: "✅ Server is running smoothly!",
  });
});

/*=====================
Create User , Get all user Route, Get, Update and Delete single User via ID
=======================*/
app.use("/api/users", userRoute);

export default app;
