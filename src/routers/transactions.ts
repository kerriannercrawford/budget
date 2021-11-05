import express from 'express';
import transactionsController from '../controller/transactions';

const transactionsRouter = express.Router();

transactionsRouter.post('/', (req, res) => {
  res.status(200).json({});
})

transactionsRouter.get('/:user_id', (req, res) => {
  res.status(200).json({});
});

transactionsRouter.get('/:user_id/:account_id', (req, res) => {
  res.status(200).json({});
});

transactionsRouter.get('/:user_id/:transaction_id', (req, res) => {
  res.status(200).json({});
})

transactionsRouter.patch('/:transaction_id', (req, res) => {
  res.status(200).json({});
})

transactionsRouter.delete('/:user_id/:transaction_id', (req, res) => {
  res.status(200).json({});
})

export default transactionsRouter;