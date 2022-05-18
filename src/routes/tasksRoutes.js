const express = require('express');
const { getTasks, putTasks } = require('../controllers/tasksController');
const { validateToken } = require('../utils/helpers');

const taskRoutes = express.Router();

taskRoutes.get('/', validateToken, getTasks);
taskRoutes.post('/', validateToken, putTasks);

module.exports = taskRoutes;
