import { TransactionController } from '../../src/types/controller';
import { ExpressRes, ExpressReq, DeleteResponseMessage } from '../../src/types/express';

const express = require('express');
const transactionsController: TransactionController = require('../controller/transactions');

const transactionsRouter = express.Router();

transactionsRouter.post('/', transactionsController.createTransaction, (req: ExpressReq, res: ExpressRes) => {
  res.status(200).json(res.locals.transaction);
});

transactionsRouter.get('/:user_id', transactionsController.getAllUserTransactions, (req: ExpressReq, res: ExpressRes) => {
  res.status(200).json(res.locals.transactions);
});

transactionsRouter.get('/:user_id/account/:account_id', transactionsController.getAllAccountTransactions, (req: ExpressReq, res: ExpressRes) => {
  res.status(200).json(res.locals.transactions);
});

transactionsRouter.get('/:user_id/transaction/:transaction_id', transactionsController.getOneUserTransaction, (req: ExpressReq, res: ExpressRes) => {
  res.status(200).json(res.locals.transaction);
});

transactionsRouter.get('/memo/:transaction_id', transactionsController.getTransactionMemoById, (req: ExpressReq, res: ExpressRes) => {
  res.status(200).json(res.locals.memo);
})

transactionsRouter.patch('/:transaction_id', transactionsController.updateTransaction, (req: ExpressReq, res: ExpressRes) => {
  res.status(200).json(res.locals.transaction);
});

transactionsRouter.delete(':transaction_id/', transactionsController.deleteTransaction, (req: ExpressReq, res: ExpressRes) => {
  const returnMsg: DeleteResponseMessage = {
    message: `Deletion of transaction id ${req.params.transaction_id} was successful`
  };
  returnMsg.transaction_id = req.params.transaction_id;
  res.status(200).json(returnMsg);
});

module.exports = transactionsRouter;
export {};