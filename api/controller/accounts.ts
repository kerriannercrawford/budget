import { AccountController } from '../types/controller';
import { ExpressRes, ExpressReq, ExpressNext } from '../types/express';

const accounts = require('../models/accountsModel');
const { checkResult } = require('../util/util');

const accountsController: AccountController = {};

accountsController.createAccount = async (req: ExpressReq, res: ExpressRes, next: ExpressNext) => {
  const { userId, accountName } = req.body;
  const createdAccount = await accounts.create({
    name: {
      userId,
      accountName
    }
  });
  checkResult(createdAccount, next, 'Error: Unable to create account');
  res.locals.account = createdAccount;
  return next();
};

accountsController.getAllUserAccounts = async (req: ExpressReq, res: ExpressRes, next: ExpressNext) => {
  const foundAccounts = await accounts.find({ userId: req.params.userId });
  checkResult(foundAccounts, next, 'Error: Unable to locate accounts');
  res.locals.accounts = foundAccounts;
  return next();
};

accountsController.getOneUserAccount = async (req: ExpressReq, res: ExpressRes, next: ExpressNext) => {
  const foundAccount = await accounts.find({ _id: req.params.accountId });
  checkResult(foundAccount, next, 'Error: Unable to locate account');
  res.locals.account = foundAccount;
  return next();
};

accountsController.updateAccount = async (req: ExpressReq, res: ExpressRes, next: ExpressNext) => {
  const query = { _id: req.params.accountId };
  const updatedAccount = await accounts.findOneAndUpdate(
    query, 
    req.body,
    { new: true }
  );
  checkResult(updatedAccount, next, 'Error: Unable to update account')
  res.locals.account = updatedAccount;
  return next();
};

accountsController.deleteUserAccount = async (req: ExpressReq, res: ExpressRes, next: ExpressNext) => {
  const deletedAccount = await accounts.findOneAndDelete({ _id: req.params.accountId });
  checkResult(deletedAccount, next, 'Error: Unable to update account');
  res.locals.account = deletedAccount;
  return next();
};

module.exports = accountsController;
export {};
