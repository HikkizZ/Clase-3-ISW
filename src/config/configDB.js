"use strict"; // Modo estricto. Evita errores comunes
import {DataSource} from "typeorm"; // Importar la clase DataSource de TypeORM
import {DATABASE, DB_USERNAME, HOST, PASSWORD} from './configEnv.js'; // Importar variables de entorno

export const AppDataSource = new DataSource({ // Exportar una instancia de DataSource
    type: "postgres", // Tipo de base de datos
    host: `${HOST}`, // Host de la base de datos
    port: 5432, // Puerto de la base de datos
    username: `${DB_USERNAME}`, // Usuario de la base de datos
    password: `${PASSWORD}`, // Contraseña de la base de datos
    database: `${DATABASE}`, // Nombre de la base de datos
    synchronize: true, // Sincronizar la base de datos. ORM gestiona la BD
    logging: false, // No mostrar logs. Muestra las consultas SQL por debajo de la aplicación
    entities: [ // Entidades de la base de datos
        "src/entity/**/*.js"
    ]
});

export async function connectDB() { // Exportar una función asíncrona
    try {
        await AppDataSource.initialize(); // Conectar a la base de datos
        console.log("=> Conectado a la base de datos correctamente");
    } catch (error) {
        console.error("Error al conectarse a la base de datos. El error es: ", error);
    }
}