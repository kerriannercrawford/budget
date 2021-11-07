import { AccountQuery } from '../../src/types/queries';
import { AccountController } from '../../src/types/controller';
import { ExpressRes, ExpressReq, ExpressNext } from '../../src/types/express';

const accounts = require('../models/accountsModel');

const accountsController: AccountController = {};

accountsController.createAccount = async (req: ExpressReq, res: ExpressRes, next: ExpressNext) => {
  const { userId, accountName } = req.body;
  const createdAccount = await accounts.create({
    name: {
      userId,
      accountName
    }
  });
  if (!createdAccount) {
    return next({
      log: 'Error: Unable to create account',
      message: {
        err: 'Error: Unable to create account'
      }
    })
  }
  res.locals.account = createdAccount;
  return next();
};

accountsController.getAllUserAccounts = async (req: ExpressReq, res: ExpressRes, next: ExpressNext) => {
  const foundAccounts = await accounts.find({ userId: req.params.userId });
  if (!foundAccounts) {
    return next({
      log: 'Error: Unable to locate accounts',
      message: {
        err: 'Error: Unable to locate accounts'
      }
    })
  }
  res.locals.accounts = foundAccounts;
  return next();
};

accountsController.getOneUserAccount = async (req: ExpressReq, res: ExpressRes, next: ExpressNext) => {
  const foundAccount = await accounts.find({ _id: req.params.accountId });
  if (!foundAccount) {
    return next({
      log: 'Error: Unable to locate account',
      message: {
        err: 'Error: Unable to locate account'
      }
    })
  }
  res.locals.account = foundAccount;
  return next();
};

accountsController.updateAccount = async (req: ExpressReq, res: ExpressRes, next: ExpressNext) => {
  const query = { _id: req.params.accountId };
  const updateBody: any = {};
  if (req.body.accountName && req.body.userId) {
    updateBody.name = {
      accountName: req.body.accountName,
      userId: req.body.userId
    };
    updateBody.userId = req.body.userId;
  }
  if (req.body.active) {
    updateBody.active = req.body.active;
  }
  if (req.body.clearedBalance) {
    updateBody.clearedBalance = req.body.clearedBalance;
  }
  if (req.body.unclearedBalance) {
    updateBody.unclearedBalance = req.body.unclearedBalance;
  }
  const updatedAccount = await accounts.findOneAndUpdate(
    query, 
    updateBody,
    { new: true }
  );
  if (!updatedAccount) {
    return next({
      log: 'Error: Unable to update account',
      message: {
        err: 'Error: Unable to update account'
      }
    })
  }
  res.locals.account = updatedAccount;
  return next();
};

accountsController.deleteUserAccount = async (req: ExpressReq, res: ExpressRes, next: ExpressNext) => {
  const deletedAccount = await accounts.findOneAndDelete({ _id: req.params.accountId });
  if (!deletedAccount) {
    return next({
      log: 'Error: Unable to delete account',
      message: {
        err: 'Error: Unable to delete account'
      }
    })
  }
  res.locals.account = deletedAccount;
  return next();
};

module.exports = accountsController;
export {};
