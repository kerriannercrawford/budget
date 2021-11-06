const bcrypt = require('bcrypt');
require('dotenv').config();

const  { SALT_ROUNDS } = process.env;

const encryptPassword = async (password: string): Promise<string> => {
  return await bcrypt.hash(password, parseInt(SALT_ROUNDS));
};

const validatePassword = async (password: string, hash: string): Promise<boolean> => {
  return await bcrypt.compare(password, hash)
}

module.exports = {
  encryptPassword,
  validatePassword
}