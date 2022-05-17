const bcrypt = require('bcryptjs');
const { addUserToDb, getUserFromDb } = require('../models/authModel');
const { failResponse, successResponse } = require('../utils/dbHelpers');
const { verifyHash } = require('../utils/helpers');

async function registerController(req, res) {
  const passHash = bcrypt.hashSync(req.body.password, 10);
  const registerData = await addUserToDb(req.body.email, passHash);
  if (!registerData.insertId) {
    return res.status(500).send({ err: 'Server issue - please try again' });
  }
  return res.send({
    msg: 'Registration successful',
    userId: registerData.insertId,
  });
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
  return successResponse(res, 'veikia login');
}

module.exports = {
  registerController,
  loginController,
};
