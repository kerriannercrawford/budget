const express = require('express');
const usersController = require('../controller/users');
const usersRouter = express.Router();

usersRouter.get('/', usersController.getAllUsers, (req: any, res: any) => {
  res.status(200).json(res.locals.users);
});

usersRouter.get('/:user_id', usersController.getUserById, (req: any, res: any) => {
  res.status(200).json(res.locals.user);
});

usersRouter.post('/login', usersController.checkForUser, usersController.login, (req: any, res: any) => {
  res.status(200).json(res.locals.user);
});

usersRouter.post('/create', usersController.createUser, (req: any, res: any) => {
  res.status(200).json(res.locals.user);
});

usersRouter.patch('/:user_id', (req: any, res: any) => {
  res.status(200).json({});
});

usersRouter.delete('/:user_id', (req: any, res: any) => {
  res.status(200).json({});
});

module.exports = usersRouter;
export {};