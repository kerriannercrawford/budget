const express = require('express');
const groupsController = require('../controller/groups');

const groupsRouter = express.Router();

groupsRouter.post('/', (req: any, res: any) => {
  res.status(200).json({});
});

groupsRouter.get('/:user_id', (req: any, res: any) => {
  res.status(200).json({});
});

groupsRouter.get('/:user_id/:group_id', (req: any, res: any) => {
  res.status(200).json({});
});

groupsRouter.patch('/:group_id', (req: any, res: any) => {
  res.status(200).json({});
});

groupsRouter.delete('/:user_id/:group_id', (req: any, res: any) => {
  res.status(200).json({});
});

module.exports = groupsRouter;
export {};