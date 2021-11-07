import { PayeeController } from '../../src/types/controller';
import { ExpressRes, ExpressReq, DeleteResponseMessage } from '../../src/types/express';

const express = require('express');
const payeesController: PayeeController = require('../controller/payees');

const payeesRouter = express.Router();

payeesRouter.post('/', payeesController.createPayee, (req: ExpressReq, res: ExpressRes) => {
  res.status(200).json(res.locals.payee);
});

payeesRouter.get('/:user_id', payeesController.getAllUserPayees, (req: ExpressReq, res: ExpressRes) => {
  res.status(200).json(res.locals.payees);
});

payeesRouter.get('/:user_id/:payee_id', payeesController.getOneUserPayee, (req: ExpressReq, res: ExpressRes) => {
  res.status(200).json(res.locals.payee);
});

payeesRouter.get('/name/:payee_id', payeesController.getPayeeNameById, (req: ExpressReq, res: ExpressRes) => {
  res.status(200).json(res.locals.name);
})

payeesRouter.patch('/:payee_id', payeesController.updatePayee, (req: ExpressReq, res: ExpressRes) => {
  res.status(200).json(res.locals.payee);
});

payeesRouter.delete('/:payee_id', payeesController.deletePayee, (req: ExpressReq, res: ExpressRes) => {
  const returnMsg: DeleteResponseMessage = {
    message: `Deletion of payee id ${req.params.payee_id} was successful`
  };
  returnMsg.payee_id = req.params.payee_id;
  res.status(200).json(returnMsg);
});

module.exports = payeesRouter;
export {};