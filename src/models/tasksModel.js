const mysql = require('mysql2/promise');
const dbConfig = require('../dbConfig');

async function getTasksFromDb() {
  try {
    const connection = await mysql.createConnection(dbConfig);
    const sql = `SELECT * FROM tasks`;
    const [result] = await connection.query(sql);
    await connection.close();
    return result;
  } catch (error) {
    console.log('getTask error', error);
    return false;
  }
}

async function putTaskIntoDb(data) {
  try {
    const connection = await mysql.createConnection(dbConfig);
    const sql = `INSERT INTO tasks (user_id, description) VALUES (?, ?)`;
    const { user_id, description } = data;
    const [result] = await connection.execute(sql, [user_id, description]);
    await connection.close();
    return result;
  } catch (error) {
    console.log('putTaskIntoDb error', error);
    return false;
  }
}

module.exports = {
  getTasksFromDb,
  putTaskIntoDb,
};
