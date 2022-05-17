const express = require('express');
const { getTasks, putTasks } = require('../controllers/tasksController');

const taskRoutes = express.Router();

taskRoutes.get('/', getTasks);
taskRoutes.post('/', putTasks);

module.exports = taskRoutes;
