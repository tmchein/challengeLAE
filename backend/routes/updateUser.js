//Rutas para crear usuarios
const express = require('express');
const router = express.Router();
const updateUserController = require('../controllers/updateUserController');

//actualiza la informacion de un usuario
// /updateuser

//llamando a la funcion updateuser para actualizar la informacion de un usuario
router.put('/', updateUserController.updateUser);

module.exports = router;
