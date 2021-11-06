import { ExpressRes, ExpressReq, DeleteResponseMessage } from '../../src/types/express';

const express = require('express');
const accountsController = require('../controller/accounts');

const accountsRouter = express.Router();

accountsRouter.post('/', accountsController.createAccount, (req: ExpressReq, res: ExpressRes) => {
  res.status(200).json(res.locals.account);
});

accountsRouter.get('/:user_id', accountsController.getAllUserAccounts, (req: ExpressReq, res: ExpressRes) => {
  res.status(200).json(res.locals.accounts);
});

accountsRouter.get('/:user_id/:account_id', accountsController.getOneUserAccount, (req: ExpressReq, res: ExpressRes) => {
  res.status(200).json(res.locals.account);
});

accountsRouter.patch('/:account_id', accountsController.updateAccount, (req: ExpressReq, res: ExpressRes) => {
  res.status(200).json(res.locals.account);
});

accountsRouter.delete('/:account_id', accountsController.deleteUserAccount, (req: ExpressReq, res: ExpressRes) => {
  const returnMsg: DeleteResponseMessage = {
    message: `Deletion of account id ${req.params.account_id} was successful`
  };
  returnMsg.account_id = req.params.account_id;
  res.status(200).json(returnMsg);
});

module.exports = accountsRouter;
export {};