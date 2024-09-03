import { createPool } from "mysql2/promise";
import { DB_HOST, DB_NAME, DB_USER, DB_PORT } from "../config/env.js";

export const createMyPool = async () => {
  try {
    const pool = createPool({
      host: DB_HOST,
      user: DB_USER,
      database: DB_NAME,
      port: DB_PORT,
    });
    console.log("Base de datos conectada");
    return pool;
  } catch (error) {
    console.log("Error al conectar con la base de datos: ", error);
  }
};
