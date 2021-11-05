import express from 'express';
import { payeesController } from '../controller/payees';

export const payeesRouter = express.Router();

// payeesRouter.get('', middleware, (req, res)) => {
//   res.status(200).json()
// }

module.exports = payeesRouter;