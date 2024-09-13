"use strict"; // Para que no se puedan declarar variables sin var, let o const
import {fileURLToPath} from 'url'; // Para obtener la ruta del archivo actual
import path from 'path'; // Para trabajar con rutas de archivos
import dotenv from 'dotenv'; // Para leer archivos .env

const _filename = fileURLToPath(import.meta.url); // Obtener la ruta del archivo actual
const _dirname = path.dirname(_filename); // Obtener el directorio del archivo actual
const _envPath = path.resolve(_dirname, '.env'); // Obtener la ruta del archivo .env

dotenv.config({path: _envPath}); // Configurar dotenv con la ruta del archivo .env

export const PORT = process.env.PORT; // Puerto del servidor
export const HOST = process.env.HOST; // Host del servidor
export const DATABASE = process.env.DATABASE; // Nombre de la base de datos
export const DB_USERNAME = process.env.DB_USERNAME; // Usuario de la base de datos
export const PASSWORD = process.env.PASSWORD; // Contraseña de la base de datos