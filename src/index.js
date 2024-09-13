import express, { json } from 'express'; // Module
import indexRoutes from './routes/index.routes.js'; // Importa correctamente indexRoutes
import { PORT, HOST } from './config/configEnv.js';
import { connectDB } from './config/configDB.js';

async function setupServer() {
    try {
        const app = express(); // Instanciar express y almacenar métodos en app
        const port = 3000;

        app.use(json()); // Middleware para parsear JSON

        app.use('/api', indexRoutes); // Usa indexRoutes en lugar de indexRouter

        app.listen(port, () => {
            console.log(`Server listening at http://${HOST}:${PORT}`);
        });
    } catch (error) {
        console.error("Error en index.js -> setupServer(). El error es: ", error);
    }
}

async function setupAPI() {
    try {
        await connectDB(); // Conectar a la base de datos
        await setupServer(); // Configurar el servidor
    } catch (error) {
        console.error("Error en index.js -> setupAPI(). El error es: ", error);
    }
}

setupAPI() // Iniciar la API
    .then(() => console.log("API iniciada correctamente"))
    .catch(error => console.error("Error en index.js -> setupAPI(). El error es: ", error));
