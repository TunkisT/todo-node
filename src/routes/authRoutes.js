const express = require('express');
const { registerController } = require('../controllers/authController');

const authRoutes = express.Router();

authRoutes.post('/', registerController);

module.exports = authRoutes;
