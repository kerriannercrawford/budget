import { AccountController } from '../../src/types/controller';
import { ExpressRes, ExpressReq, DeleteResponseMessage } from '../../src/types/express';

const express = require('express');
const accountsController: AccountController = require('../controller/accounts');

const accountsRouter = express.Router();

accountsRouter.post('/', accountsController.createAccount, (req: ExpressReq, res: ExpressRes) => {
  res.status(200).json(res.locals.account);
});

accountsRouter.get('/user/:userId', accountsController.getAllUserAccounts, (req: ExpressReq, res: ExpressRes) => {
  res.status(200).json(res.locals.accounts);
});

accountsRouter.get('/account/:accountId', accountsController.getOneUserAccount, (req: ExpressReq, res: ExpressRes) => {
  res.status(200).json(res.locals.account);
});

accountsRouter.patch('/:accountId', accountsController.updateAccount, (req: ExpressReq, res: ExpressRes) => {
  res.status(200).json(res.locals.account);
});

accountsRouter.delete('/:accountId', accountsController.deleteUserAccount, (req: ExpressReq, res: ExpressRes) => {
  const returnMsg: DeleteResponseMessage = {
    message: `Deletion of account id ${req.params.accountId} was successful`
  };
  returnMsg.accountId = req.params.accountId;
  res.status(200).json(returnMsg);
});

module.exports = accountsRouter;
export {};