const bcrypt = require('bcryptjs');
const { addUserToDb } = require('../models/authModel');

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

module.exports = {
  registerController,
};
