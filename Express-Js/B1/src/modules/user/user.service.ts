import { pool } from "../../db/index.js";
import type { IUser } from "./user.interface.js";

/*====================
Create User in DB
=====================*/

const createUserInDB = async (payLoad: IUser) => {
  const { name, email, password, age, is_active } = payLoad;
  /*===============
  Insert user into PostgreSQL
  =================*/
  const result = await pool.query(
    `
    INSERT INTO users (name, email, password, age, is_active)
    VALUES ($1, $2, $3, $4, $5)
    RETURNING *;
    `,
    [name, email, password, age, is_active],
  );
  return result;
};

/*====================
Get users from DB
=====================*/
const getAllUserFromDB = async () => {
  const result = await pool.query(`
      SELECT * FROM users`);
  return result;
};

/*======================
Get Single user from DB via ID
=========================*/
const getSingleUserFromDB = async (id: string) => {
  const result = await pool.query(`SELECT * FROM users WHERE id=$1`, [id]);
  return result;
};

/*=====================
Update user in DB via ID
======================*/
const updateSingleUserInDB = async (payLoad: IUser, id: string) => {
  const { name, email, password, age, is_active } = payLoad;
  const result = await pool.query(
    `UPDATE users set 
      name=COALESCE($1,name), 
      email=COALESCE($2,email), 
      password=COALESCE($3,password), 
      age=COALESCE($4,age),
      is_active=COALESCE($5,is_active) 
      WHERE id=$6 RETURNING *`,
    [name, email, password, age, is_active, id],
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
