import express from 'express';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';

/**
 *  Variable que almacena la aplicación de Express encargada de la gestion del servidor web
 */
const app = express();

/**
 *  Variable que almacena la ruta del archivo actual
 */
const __filename = fileURLToPath(import.meta.url);


/**
 * Variable que almacena el nombre del directorio de la ruta actual
 */
const __dirname = dirname(__filename);

/**
 * Variable que almacena el valor del puerto del servidor web
 */
const port = process.env.PORT || 8081;


// Servir archivos estáticos
app.use(express.static(__dirname + '/dist'));

// Para todas las demás rutas servir el archivo index.html así se le pasa el manejo de las rutas a Angular y el sabe qué hacer
app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname + '/dist/index.html'));
});

// Poner el servidor en marcha
app.listen(port, () => {
  console.log(`Servidor corriendo en el puerto ${port}...`);
});


