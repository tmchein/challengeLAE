//Rutas para crear usuarios
const express = require('express');
const router = express.Router();
const deleteUserController = require('../controllers/deleteUserController');

//Borra a un usuario de la lista de usuarios
// /deleteUser

//llamando a la funcion deleteuser del controlador de deleteuser
router.post('/', deleteUserController.deleteUser);

module.exports = router;
