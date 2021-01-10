//Rutas para crear usuarios
const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

//Crea una autenticacion
// /auth

//llamando a la funcion authenticateUser
router.post('/', authController.authenticateUser);

module.exports = router;
