//Rutas para crear usuarios
const express = require('express');
const router = express.Router();
const userController = require('../controllers/usersController');

//Crea un usuario
// /users

//llamando a la funcion createUser del controlador de usuarios
router.post('/', userController.createUser);

module.exports = router;
