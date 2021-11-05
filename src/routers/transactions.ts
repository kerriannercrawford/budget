import express from 'express';
import transactionsController from '../controller/transactions';

const transactionsRouter = express.Router();

transactionsRouter.get('/', (req, res) => {
  res.status(200).json({});
});

export default transactionsRouter;