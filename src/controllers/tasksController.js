const { getTasksFromDb, putTaskIntoDb } = require('../models/tasksModel');
const { failResponse, successResponse } = require('../utils/dbHelpers');

async function getTasks(req, res) {
  const taskData = await getTasksFromDb();
  !taskData ? failResponse(res) : successResponse(res, taskData);
}

async function putTasks(req, res) {
  const data = req.body;
  const taskData = await putTaskIntoDb(data);
  !taskData ? failResponse(res) : successResponse(res, taskData);
}

module.exports = {
  getTasks,
  putTasks,
};
