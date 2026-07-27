import { Pool } from "pg";
import config from "../config/index.js";

/*=====================
Create a PostgreSQL connection pool and The pool manages database connections automatically.
======================*/
export const pool = new Pool({
  connectionString: config.connection_string,
});

/*======================
Initialize Database
======================*/
export const initDB = async () => {
  try {
    /*===========================
    Create users table only if it doesn't already exist
    ===========================*/
    await pool.query(`
      CREATE TABLE IF NOT EXISTS users (
        id SERIAL PRIMARY KEY,
        name VARCHAR(100),

        -- Remove one UNIQUE keyword here
        email VARCHAR(255) NOT NULL UNIQUE,

        password VARCHAR(255) NOT NULL,
        is_active BOOLEAN DEFAULT TRUE,
        age INT,

        created_at TIMESTAMP DEFAULT NOW(),
        updated_at TIMESTAMP DEFAULT NOW()
      );
    `);

    /*===========================
    Create users profile table only if it doesn't already exist
    ===========================*/
    await pool.query(`
      CREATE TABLE IF NOT EXISTS profiles (
      id SERIAL PRIMARY KEY,
      user_id INT UNIQUE REFERENCES users(id) ON DELETE CASCADE,
      bio TEXT,
      address TEXT,
      phone VARCHAR(15),
      gender VARCHAR(10),

      created_at TIMESTAMP DEFAULT NOW(),
      updated_at TIMESTAMP DEFAULT NOW()
      
      )
      `);
    console.log("✅ Database connected successfully");
  } catch (error) {
    console.error("❌ Failed to connecting the database:", error);
  }
};
