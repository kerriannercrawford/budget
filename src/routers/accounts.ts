const express = require('express');
const accountsController = require('../controller/accounts');

const accountsRouter = express.Router();

accountsRouter.post('/', (req: any, res: any) => {
  res.status(200).json({});
});

accountsRouter.get('/users/:user_id', (req: any, res: any) => {
  res.status(200).json({});
});

accountsRouter.get('/:account_id/users/:user_id', (req: any, res: any) => {
  res.status(200).json({});
});

accountsRouter.patch('/:account_id', (req: any, res: any) => {
  res.status(200).json({});
});

accountsRouter.delete('/:account_id', (req: any, res: any) => {
  res.status(200).json({});
});

module.exports = accountsRouter;
export {};