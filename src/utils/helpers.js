const bcrypt = require('bcryptjs');
const Joi = require('joi');

const userSchema = Joi.object({
  email: Joi.string().email().lowercase().trim().required(),
  password: Joi.string().required(),
});

function verifyHash(enteredPassword, storedPassword) {
  return bcrypt.compareSync(enteredPassword, storedPassword);
}

module.exports = { userSchema, verifyHash };
