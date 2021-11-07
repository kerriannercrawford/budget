import { PayeeController } from '../../src/types/controller';
import { ExpressRes, ExpressReq, DeleteResponseMessage } from '../../src/types/express';

const express = require('express');
const payeesController: PayeeController = require('../controller/payees');
const { deleteResponseMessage } = require('../util/util');
const TYPE = 'payee';

const payeesRouter = express.Router();

payeesRouter.post('/', payeesController.createPayee, (req: ExpressReq, res: ExpressRes) => {
  res.status(200).json(res.locals.payee);
});

payeesRouter.get('/user/:userId', payeesController.getAllUserPayees, (req: ExpressReq, res: ExpressRes) => {
  res.status(200).json(res.locals.payees);
});

payeesRouter.get('/payee/:payeeId', payeesController.getOneUserPayee, (req: ExpressReq, res: ExpressRes) => {
  res.status(200).json(res.locals.payee);
});

payeesRouter.patch('/:payeeId', payeesController.updatePayee, (req: ExpressReq, res: ExpressRes) => {
  res.status(200).json(res.locals.payee);
});

payeesRouter.delete('/:payeeId', payeesController.deletePayee, (req: ExpressReq, res: ExpressRes) => {
  res.status(200).json(deleteResponseMessage(TYPE, req.params.payeeId));
});

module.exports = payeesRouter;
export {};