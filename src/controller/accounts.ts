import { AccountQuery } from '../../src/types/queries';
import { AccountController } from '../../src/types/controller';
import { ExpressRes, ExpressReq, ExpressNext } from '../../src/types/express';

const accounts = require('../models/accountsModel');

const accountsController: AccountController = {};

accountsController.createAccount = async (req: ExpressReq, res: ExpressRes, next: ExpressNext) => {
  
  return next();
};

accountsController.getAllUserAccounts = async (req: ExpressReq, res: ExpressRes, next: ExpressNext) => {

  return next();
};

accountsController.getOneUserAccount = async (req: ExpressReq, res: ExpressRes, next: ExpressNext) => {

  return next();
};

accountsController.updateAccount = async (req: ExpressReq, res: ExpressRes, next: ExpressNext) => {

  return next();
};

accountsController.deleteUserAccount = async (req: ExpressReq, res: ExpressRes, next: ExpressNext) => {

  return next();
};

accountsController.getAccountNameById = async (req: ExpressReq, res: ExpressRes, next: ExpressNext) => {

  return next();
}

module.exports = accountsController;
export {};
