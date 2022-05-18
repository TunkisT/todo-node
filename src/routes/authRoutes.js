const express = require('express');
const {
  registerController,
  loginController,
} = require('../controllers/authController');
const { validateRegistration, validateLogin } = require('../utils/helpers');

const authRoutes = express.Router();

authRoutes.post('/register', validateRegistration, registerController);
authRoutes.post('/login', validateLogin, loginController);

module.exports = authRoutes;
