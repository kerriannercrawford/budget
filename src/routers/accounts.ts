import express from 'express';
import { accountsController } from '../controller/accounts';

export const accountsRouter = express.Router();

// accountRouter.get('', middleware, (req, res)) => {
//   res.status(200).json()
// }

module.exports = accountsRouter;