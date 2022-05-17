const express = require('express');
const {
  registerController,
  loginController,
} = require('../controllers/authController');

const authRoutes = express.Router();

authRoutes.post('/register', registerController);
authRoutes.post('/login', loginController);

module.exports = authRoutes;
