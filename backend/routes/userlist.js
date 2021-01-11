//Rutas para crear usuarios
const express = require('express');
const router = express.Router();
const userlistController = require('../controllers/userlistController');

//Obtiene la lista de usuarios
// /userlist

//llamando a la funcion getuserlist del controlador de lista de usuarios
router.post('/', userlistController.getUserlist);

module.exports = router;
