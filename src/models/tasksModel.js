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
module.exports = {
  getTasksFromDb,
};
