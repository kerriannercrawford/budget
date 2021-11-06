const express = require('express');
const transactionsController = require('../controller/transactions');

const transactionsRouter = express.Router();

transactionsRouter.post('/', transactionsController.createTransaction, (req: any, res: any) => {
  res.status(200).json(res.locals.transaction);
});

transactionsRouter.get('/:user_id', transactionsController.getAllUserTransactions, (req: any, res: any) => {
  res.status(200).json(res.locals.transactions);
});

transactionsRouter.get('/:user_id/account/:account_id', transactionsController.getAllAccountTransactions, (req: any, res: any) => {
  res.status(200).json(res.locals.transactions);
});

transactionsRouter.get('/:user_id/transaction/:transaction_id', transactionsController.getOneUserTransaction, (req: any, res: any) => {
  res.status(200).json(res.locals.transaction);
});

transactionsRouter.patch('/:transaction_id', transactionsController.updateTransaction, (req: any, res: any) => {
  res.status(200).json(res.locals.transaction);
});

transactionsRouter.delete(':transaction_id/', transactionsController.deleteTransaction, (req: any, res: any) => {
  const returnMsg: any = {
    message: `Deletion of transaction id ${req.params.transaction_id} was successful`
  }
  returnMsg.transaction_id = req.params.transaction_id;
  res.status(200).json(returnMsg);
});

module.exports = transactionsRouter;
export {};