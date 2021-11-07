const bcrypt = require('bcrypt');
require('dotenv').config();

const  { SALT_ROUNDS } = process.env;

const encryptPassword = async (password: string): Promise<string> => {
  return await bcrypt.hash(password, Number(SALT_ROUNDS));
};

const validatePassword = async (password: string, hash: string): Promise<boolean> => {
  return await bcrypt.compare(password, hash);
};

const YEAR_DEFAULT = () => {
  return new Date().getFullYear();
}

const MONTH_DEFAULT = () => {
  return (new Date().getMonth() + 1)
}

module.exports = {
  encryptPassword,
  validatePassword,
  YEAR_DEFAULT,
  MONTH_DEFAULT
};