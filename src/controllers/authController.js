const bcrypt = require('bcryptjs');
const { addUserToDb, getUserFromDb } = require('../models/authModel');
const { failResponse, successResponse } = require('../utils/dbHelpers');
const { verifyHash, generateJwtToken } = require('../utils/helpers');

async function registerController(req, res) {
  const passHash = bcrypt.hashSync(req.body.password, 10);
  const registerData = await addUserToDb(req.body.email, passHash);
  if (!registerData.insertId) {
    failResponse(res);
    return;
  }
  successResponse(res, 'New user created!');
}

async function loginController(req, res) {
  const { email, password } = req.body;

  const findResults = await getUserFromDb(email);

  if (findResults === false) return failResponse(res, 'something went wrong');
  if (!findResults.length) return failResponse(res, 'email or pass not match');

  const foundUserObj = findResults[0];

  if (!verifyHash(password, foundUserObj.password)) {
    const error = [{ message: 'incorrect email or password' }];
    return failResponse(res, error);
  }
  console.log('foundUserObj ===', foundUserObj);

  const token = generateJwtToken(foundUserObj);
  return successResponse(res, token);
}

module.exports = {
  registerController,
  loginController,
};
