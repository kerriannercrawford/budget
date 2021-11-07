import { PayeeController } from '../../src/types/controller';
import { ExpressRes, ExpressReq, DeleteResponseMessage } from '../../src/types/express';

const express = require('express');
const payeesController: PayeeController = require('../controller/payees');

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
  const returnMsg: DeleteResponseMessage = {
    message: `Deletion of payee id ${req.params.payeeId} was successful`
  };
  returnMsg.payeeId = req.params.payeeId;
  res.status(200).json(returnMsg);
});

module.exports = payeesRouter;
export {};