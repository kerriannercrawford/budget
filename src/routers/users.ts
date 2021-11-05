const express = require('express');
const usersController = require('../controller/users');
const usersRouter = express.Router();

usersRouter.get('/', (req: any, res: any) => {
  res.status(200).json({});
});

usersRouter.get('/:user_id', (req: any, res: any) => {
  res.status(200).json({});
});

usersRouter.post('/login', (req: any, res: any) => {
  res.status(200).json({});
});

usersRouter.post('/create', (req: any, res: any) => {
  res.status(200).json({});
});

usersRouter.patch('/:user_id', (req: any, res: any) => {
  res.status(200).json({});
});

usersRouter.delete('/:user_id', (req: any, res: any) => {
  res.status(200).json({});
});

module.exports = usersRouter;
export {};