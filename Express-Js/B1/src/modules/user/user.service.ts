import { pool } from "../../db/index.js";
import type { IUser } from "./user.interface.js";

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

/*===============
  Export for uses
=================*/
export const userService = { createUserInDB };
