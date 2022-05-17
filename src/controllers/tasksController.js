const { getTasksFromDb, putTaskIntoDb } = require('../models/tasksModel');

async function getTasks(req, res) {
  const taskData = await getTasksFromDb();
  !taskData
    ? res.status(500).json('Something get wrong')
    : res.status(200).json(taskData);
}

async function putTasks(req, res) {
  const data = req.body;
  const taskData = await putTaskIntoDb(data);
  !taskData
    ? res.status(500).json('Something get wrong')
    : res.status(200).json(taskData);
}

module.exports = {
  getTasks,
  putTasks,
};
