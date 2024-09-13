"use strict"; // Para que no se puedan declarar variables sin var, let o const
import User from '../entity/user.entity.js'; // Importar la entidad User
import { AppDataSource } from '../config/configDB.js';

export async function createUser(req, res) {  // Exportación nombrada
    try {
        const userRepository = AppDataSource.getRepository(User); // Obtener el repositorio de User
        
        const user = req.body; // Obtener el body de la petición

        if (!user) {
            return res.status(400).json({
                message: "No se ha enviado el body",
                data: null
            });
        }

        const newUser = userRepository.create({
            name: user.name,
            rut: user.rut,
            email: user.email
        }); // Crear un nuevo usuario
        
        const userSaved = await userRepository.save(newUser); // Guardar el usuario en la base de datos

        res.status(201).json({
            message: "Usuario creado correctamente",
            data: userSaved
        });
    } catch (error) {
        console.error("Error al crear el usuario. El error es: ", error);
        res.status(500).json({
            message: "Error al crear el usuario",
            error: error.message
        });
    }
}

export async function getUsers(req, res) { // Exportación nombrada
    try {
        const userRepository = AppDataSource.getRepository(User); // Obtener el repositorio de User

        const users = await userRepository.find(); // Obtener todos los usuarios

        res.status(200).json({
            message: "Usuarios obtenidos correctamente",
            data: users
        });
    } catch (error) {
        console.error("Error al obtener los usuarios. El error es: ", error);
        res.status(500).json({
            message: "Error al obtener los usuarios",
            error: error.message
        });
    }
}

export async function getUser(req, res) { // Exportación nombrada
    try {
        const userRepository = AppDataSource.getRepository(User); // Obtener el repositorio de User

        const id = req.params.id; // Obtener el id de la petición

        if (!id) {
            return res.status(400).json({
                message: "No se ha enviado el id",
                data: null
            });
        }

        // Corregido: usar 'where' para buscar por id
        const user = await userRepository.findOne({
            where: { id: parseInt(id, 10) } // Asegurarse de que el id sea un número
        });

        if (!user) {
            return res.status(404).json({
                message: "Usuario no encontrado",
                data: null
            });
        }

        res.status(200).json({
            message: "Usuario obtenido correctamente",
            data: user
        });
    } catch (error) {
        console.error("Error al obtener el usuario. El error es: ", error);
        res.status(500).json({
            message: "Error al obtener el usuario",
            error: error.message
        });
    }
}
