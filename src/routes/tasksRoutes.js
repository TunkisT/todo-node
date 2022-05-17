const express = require('express');
const { getTasks } = require('../controllers/tasksController');

const taskRoutes = express.Router();

taskRoutes.get('/', getTasks);

module.exports = taskRoutes;
