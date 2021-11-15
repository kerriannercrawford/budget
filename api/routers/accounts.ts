import { AccountController } from '../types/controller';
import { ExpressRes, ExpressReq, DeleteResponseMessage } from '../types/express';

const express = require('express');
const accountsController: AccountController = require('../controller/accounts');
const { deleteResponseMessage } = require('../util/util');
const TYPE = 'account'

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
  res.status(200).json(deleteResponseMessage(TYPE, req.params.accountId));
});

module.exports = accountsRouter;
export {};