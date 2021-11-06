const express = require('express');
const transactionsController = require('../controller/transactions');

const transactionsRouter = express.Router();

transactionsRouter.post('/', transactionsController.createTransaction, (req: any, res: any) => {
  res.status(200).json(res.locals.transaction);
});

transactionsRouter.get('/:user_id', transactionsController.getAllUserTransactions, (req: any, res: any) => {
  res.status(200).json(res.locals.transactions);
});

transactionsRouter.get('/:user_id/:account_id', transactionsController.getAllAccountTransactions, (req: any, res: any) => {
  res.status(200).json(res.locals.transactions);
});

transactionsRouter.get('/:user_id/:transaction_id', transactionsController.getOneUserTransaction, (req: any, res: any) => {
  res.status(200).json(res.locals.transaction);
});

transactionsRouter.patch('/:transaction_id', transactionsController.updateTransaction, (req: any, res: any) => {
  res.status(200).json(res.locals.transaction);
});

transactionsRouter.delete(':transaction_id/users/:user_id/', transactionsController.deleteTransaction, (req: any, res: any) => {
  res.status(200).json(res.locals.transaction);
});

module.exports = transactionsRouter;
export {};