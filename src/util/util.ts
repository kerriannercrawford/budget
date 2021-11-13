import { DeleteResponseMessage, ExpressNext } from '../types/express';

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

const getYear = (date: string) => {
  return new Date(date).getFullYear();
}

const getMonth = (date: string) => {
  return (new Date(date).getMonth() + 1);
}

const checkResult = (responseObject: any, next: ExpressNext, errorMessage: string) => {
  if (!responseObject) {
    return next({
      log: errorMessage,
      message: {
        err: errorMessage
      }
    })
  }
}

const deleteResponseMessage = (type: string, id: string): DeleteResponseMessage => {
  const idKey = `${type}Id`;
  return {
    [idKey]: id,
    message: `Deletion of ${type} id ${id} was successful`
  }
}

const updateBalance = (inflow: number, outflow: number, balance: number ) => {
  let newBalance = balance;
  if (inflow) {
    newBalance += inflow;
  }
  if (outflow) {
    newBalance -= outflow;
  }
  return newBalance
}

module.exports = {
  encryptPassword,
  validatePassword,
  YEAR_DEFAULT,
  MONTH_DEFAULT,
  checkResult,
  updateBalance,
  getYear,
  getMonth
};