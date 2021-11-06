const express = require('express');
const payeesController = require('../controller/payees');

const payeesRouter = express.Router();

payeesRouter.post('/', payeesController.createPayee, (req: any, res: any) => {
  res.status(200).json(res.locals.payee);
});

payeesRouter.get('/:user_id', payeesController.getAllUserPayees, (req: any, res: any) => {
  res.status(200).json(res.locals.payees);
});

payeesRouter.get('/:user_id/:payee_id', payeesController.getOneUserPayee, (req: any, res: any) => {
  res.status(200).json(res.locals.payee);
});

payeesRouter.patch('/:payee_id', payeesController.updatePayee, (req: any, res: any) => {
  res.status(200).json(res.locals.payee);
});

payeesRouter.delete('/:user_id/:payee_id', payeesController.deletePayee, (req: any, res: any) => {
  res.status(200).json(res.locals.payee);
});

module.exports = payeesRouter;
export {};