const express = require('express');
const transactionsController = require('../controller/transactions');

const transactionsRouter = express.Router();

transactionsRouter.post('/', (req: any, res: any) => {
  res.status(200).json({});
});

transactionsRouter.get('/users/:user_id', (req: any, res: any) => {
  res.status(200).json({});
});

transactionsRouter.get('/users/:user_id/accounts/:account_id', (req: any, res: any) => {
  res.status(200).json({});
});

transactionsRouter.get('/:transaction_id/users/:user_id/', (req: any, res: any) => {
  res.status(200).json({});
});

transactionsRouter.patch('/:transaction_id', (req: any, res: any) => {
  res.status(200).json({});
});

transactionsRouter.delete(':transaction_id/users/:user_id/', (req: any, res: any) => {
  res.status(200).json({});
});

module.exports = transactionsRouter;
export {};