const mysql = require('mysql2/promise');
const dbConfig = require('../dbConfig');

async function addUserToDb(email, password) {
  try {
    const connection = await mysql.createConnection(dbConfig);
    const sql = `INSERT INTO users (email, password) VALUES (?, ?)`;
    const [result] = await connection.execute(sql, [email, password]);
    await connection.close();
    return result;
  } catch (error) {
    console.log('addUserToDb error', error);
    return false;
  }
}

async function getUserFromDb(email) {
  try {
    const connection = await mysql.createConnection(dbConfig);
    const sql = `SELECT * FROM users WHERE email = ?`;
    const [result] = await connection.execute(sql, [email]);
    await connection.close();
    return result;
  } catch (error) {
    console.log('getUserFromDb error', error);
    return false;
  }
}

module.exports = {
  addUserToDb,
  getUserFromDb,
};
