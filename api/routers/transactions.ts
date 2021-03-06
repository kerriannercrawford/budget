import { TransactionController } from '../types/controller';
import { ExpressRes, ExpressReq, DeleteResponseMessage } from '../types/express';

const express = require('express');
const transactionsController: TransactionController = require('../controller/transactions');
const { deleteResponseMessage } = require('../util/util');
const TYPE = 'transaction';

const transactionsRouter = express.Router();

transactionsRouter.post('/', transactionsController.createTransaction, transactionsController.updateCategoryBalance, transactionsController.updateGroupBalance, transactionsController.updateAccountBalance, (req: ExpressReq, res: ExpressRes) => {
  res.status(200).json(res.locals.transaction);
});

transactionsRouter.get('/user/:userId', transactionsController.getAllUserTransactions, (req: ExpressReq, res: ExpressRes) => {
  res.status(200).json(res.locals.transactions);
});

transactionsRouter.get('/account/:accountId', transactionsController.getAllAccountTransactions, (req: ExpressReq, res: ExpressRes) => {
  res.status(200).json(res.locals.transactions);
});

transactionsRouter.get('/transaction/:transactionId', transactionsController.getOneUserTransaction, (req: ExpressReq, res: ExpressRes) => {
  res.status(200).json(res.locals.transaction);
});

transactionsRouter.patch('/:transactionId', transactionsController.updateTransaction, transactionsController.updateCategoryBalance, transactionsController.updateGroupBalance, transactionsController.updateAccountBalance, (req: ExpressReq, res: ExpressRes) => {
  res.status(200).json(res.locals.transaction);
});

transactionsRouter.delete('/:transactionId', transactionsController.deleteTransaction, (req: ExpressReq, res: ExpressRes) => {
  res.status(200).json(deleteResponseMessage(TYPE, req.params.transactionId));
});

module.exports = transactionsRouter;
export {};