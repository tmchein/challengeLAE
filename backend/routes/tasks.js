//Rutas para crear usuarios
const express = require('express');
const router = express.Router();
const taskController = require('../controllers/tasksController');
const auth = require('../middleware/auth');

// /task
router.post('/', auth, taskController.createTask);

module.exports = router;
