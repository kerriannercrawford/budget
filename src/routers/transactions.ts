import express from 'express';
import { transactionsController } from '../controller/transactions';

export const transactionsRouter = express.Router();

// transactionsRouter.get('', middleware, (req, res)) => {
//   res.status(200).json()
// }

module.exports = transactionsRouter;