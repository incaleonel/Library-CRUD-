import { DataSource } from "typeorm";
import dotenv from 'dotenv';
dotenv.config();

/* Conexion a mi base de datos */
export const connectionDB = new DataSource({
    type: "postgres",
    host: "localhost",
    port: Number(process.env.DB_PORT) || 5432,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: "librarydb",
    synchronize: true,
    entities:[]
})

