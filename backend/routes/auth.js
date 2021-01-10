//Rutas para crear usuarios
const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const auth = require('../middleware/auth');

//Crea una autenticacion
// /auth

//llamando a la funcion authenticateUser
router.post('/', authController.authenticateUser);

router.get('/', auth, authController.authenticatedUser);

module.exports = router;
