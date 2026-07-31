import bcrypt from "bcryptjs";
import { pool } from "../../db/index.js";
import jwt from "jsonwebtoken";
import config from "../../config/index.js";

const loginUserInDB = async (payLoad: { email: string; password: string }) => {
  const { email, password } = payLoad;
  /*=========================
  Three STEP for JWT
  1. Check the if the user is already exists
  2.Compare the password
  3.Generate the token
  ===========================*/
  /*=======================
  Check the user existance
  =======================*/
  const userData = await pool.query(`SELECT * FROM users WHERE email=$1`, [
    email,
  ]);

  if (userData.rows.length === 0) {
    throw new Error("❌ Invalid creadientials!");
  }
  const user = userData.rows[0];

  /*=======================
  Compare the password
  =======================*/
  const matchPassword = await bcrypt.compare(password, user.password);
  console.log(matchPassword);
  if (!matchPassword) {
    throw new Error("❌ Invalid creadientials!");
  }

  /*=======================
  Generate the token
  =======================*/
  const jwtPayload = {
    id: user.id,
    name: user.name,
    email: user.email,
    is_active: user.is_active,
  };

  const accessToken = jwt.sign(jwtPayload, config.secret_key, {
    expiresIn: "1d",
  });
  return { accessToken };
};

export const authService = { loginUserInDB };
