import { pool } from "../../db/index.js";
import type { IUser } from "./user.interface.js";
import bcrypt from "bcryptjs";

/*====================
Create User in DB
=====================*/

const createUserInDB = async (payLoad: IUser) => {
  const { name, email, password, age, is_active } = payLoad;
  const hashPassword = await bcrypt.hash(password, 10);
  /*===============
  Insert user into PostgreSQL
  =================*/
  const result = await pool.query(
    `
    INSERT INTO users (name, email, password, age, is_active)
    VALUES ($1, $2, $3, $4, $5)
    RETURNING *;
    `,
    [name, email, hashPassword, age, is_active],
  );
  /*========================
emove password from the returned result for security reasons
==========================*/
  delete result.rows[0].password;
  return result;
};

/*====================
Get users from DB
=====================*/
const getAllUserFromDB = async () => {
  const result = await pool.query(`
      SELECT * FROM users`);
  delete result.rows[0].password;
  return result;
};

/*======================
Get Single user from DB via ID
=========================*/
const getSingleUserFromDB = async (id: string) => {
  const result = await pool.query(`SELECT * FROM users WHERE id=$1`, [id]);
  delete result.rows[0].password;
  return result;
};

/*=====================
Update user in DB via ID
======================*/
const updateSingleUserInDB = async (payLoad: IUser, id: string) => {
  const { name, email, password, age, is_active } = payLoad;
  const hashPassword = password ? await bcrypt.hash(password, 10) : undefined;
  const result = await pool.query(
    `UPDATE users set 
      name=COALESCE($1,name), 
      email=COALESCE($2,email), 
      password=COALESCE($3,password), 
      age=COALESCE($4,age),
      is_active=COALESCE($5,is_active) 
      WHERE id=$6 RETURNING *`,
    [name, email, hashPassword, age, is_active, id],
  );
  return result;
};

/*===========================
Delete user from DB via ID
=============================*/
const deleteSingleUserInDB = async (id: string) => {
  const result = await pool.query(
    `
      DELETE FROM users
      WHERE id = $1`,
    [id],
  );
  return result;
};
/*===============
*******Export for uses*******
=================*/
export const userService = {
  createUserInDB,
  getAllUserFromDB,
  getSingleUserFromDB,
  updateSingleUserInDB,
  deleteSingleUserInDB,
};
