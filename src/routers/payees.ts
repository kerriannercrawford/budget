const express = require('express');
const payeesController = require('../controller/payees');

const payeesRouter = express.Router();

payeesRouter.post('/', (req: any, res: any) => {
  res.status(200).json({});
});

payeesRouter.get('/:user_id', (req: any, res: any) => {
  res.status(200).json({});
});

payeesRouter.get('/:user_id/:payee_id', (req: any, res: any) => {
  res.status(200).json({});
});

payeesRouter.patch('/:payee_id', (req: any, res: any) => {
  res.status(200).json({});
});

payeesRouter.delete('/:user_id/:payee_id', (req: any, res: any) => {
  res.status(200).json({});
});

module.exports = payeesRouter;
export {};