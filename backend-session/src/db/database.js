import { createPool } from 'mysql2/promise'
import { DB_HOST, DB_USER, DB_NAME, DB_PORT } from '../settings/config.js'

export const createMyPool = async()=>{
    try {
        const pool = createPool({
            host: DB_HOST,
            user: DB_USER,
            database: DB_NAME,
            port: DB_PORT
        })
        console.log("Conectado con la base de datos")
        return pool
    } catch (error) {
        res.send("Error al conectar con la base de datos")
    }
}