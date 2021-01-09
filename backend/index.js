const express = require('express');
const connectDB = require('./config/db');

//Creando el servidor
const app = express();

//Conectar a la base de datos
connectDB();

//habilitar express.json
app.use(express.json({ extended: true }));

//puerto de la app
const port = process.env.PORT || 4000;

// Importar rutas, haciendo uso de el archivo de users para el endpoint de users
app.use('/users', require('./routes/users'));

//Arrancar la app
app.listen(port, () => {
  console.log(`El servidor esta funcionando en el puerto ${port}`);
});
