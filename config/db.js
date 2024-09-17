// Importamos la librería mongoose para trabajar con MongoDB
const mongoose = require('mongoose');

// Definimos una función asincrónica para conectar a la base de datos MongoDB
const conectarDB = async () => {
    try {
        // Intentamos conectarnos a la base de datos 'authdb' en localhost (127.0.0.1)
        await mongoose.connect('mongodb://127.0.0.1:27017/authdb', {
            serverSelectionTimeoutMS: 5000, // Tiempo de espera para la selección del servidor
            socketTimeoutMS: 45000 // Tiempo máximo de inactividad del socket
        });

        // Si la conexión es exitosa, mostramos un mensaje en la consola
        console.log('MongoDB conectado');
    } catch (error) {
        // Si ocurre un error al conectar, mostramos un mensaje de error y salimos del proceso
        console.error('Error al conectar a MongoDB:', error.message);
        process.exit(1);
    }
};

// Exportamos la función para que pueda ser utilizada desde otros archivos
module.exports = conectarDB;
