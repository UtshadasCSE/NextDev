import express, {
  type Application,
  type Request,
  type Response,
} from "express";

import { userRoute } from "./modules/user/user.route.js";
import { profileRoute } from "./modules/profile/profile.route.js";
import { authRoute } from "./modules/auth/auth.route.js";

/*=================
Create Express application
===================*/
const app: Application = express();

/*=======================
MIDDLEWARES Parse incoming JSON, Plain text and form-urlencoded data
=========================*/
app.use(express.text());
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
Handling the User Route
=======================*/
app.use("/api/users", userRoute);

/*=====================
Handling the Profile Route
=======================*/
app.use("/api/profiles", profileRoute);

/*=====================
Handling the Auth Route
=======================*/
app.use("/api/auth", authRoute);

export default app;
