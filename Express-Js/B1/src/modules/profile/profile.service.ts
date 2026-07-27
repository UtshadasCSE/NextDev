import { pool } from "../../db/index.js";

const createProfileInDB = async (payLoad: any) => {
  const { user_id, bio, address, phone, gender } = payLoad;
  /*=======================
  First check if the user exist
  ==========================*/
  const user = await pool.query(`SELECT * FROM users WHERE id=$1`, [user_id]);
  if (user.rows.length === 0) {
    throw new Error("❌ User not exist!");
  }

  const result = await pool.query(
    `INSERT INTO profiles(user_id,bio,address,phone,gender) VALUES ($1, $2, $3, $4, $5) RETURNING *;`,
    [user_id, bio, address, phone, gender],
  );
  return result;
};

export const profileService = { createProfileInDB };
