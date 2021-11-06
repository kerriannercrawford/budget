const express = require('express');
const accountsController = require('../controller/accounts');

const accountsRouter = express.Router();

accountsRouter.post('/', accountsController.createAccount, (req: any, res: any) => {
  res.status(200).json(res.locals.account);
});

accountsRouter.get('/:user_id', accountsController.getAllUsersAccounts, (req: any, res: any) => {
  res.status(200).json(res.locals.accounts);
});

accountsRouter.get('/:user_id/:account_id', accountsController.getOneUserAccount, (req: any, res: any) => {
  res.status(200).json(res.locals.account);
});

accountsRouter.patch('/:account_id', accountsController.updateAccount, (req: any, res: any) => {
  res.status(200).json(res.locals.account);
});

accountsRouter.delete('/:account_id', accountsController.deleteUserAccount, (req: any, res: any) => {
  const returnMsg: any = {
    message: `Deletion of account id ${req.params.account_id} was successful`
  }
  returnMsg.account_id = req.params.account_id;
  res.status(200).json(returnMsg);
});

module.exports = accountsRouter;
export {};