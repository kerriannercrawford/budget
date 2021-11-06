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

usersRouter.patch('/:user_id', usersController.updateUser, (req: any, res: any) => {
  res.status(200).json(res.locals.user);
});

usersRouter.delete('/:user_id', (req: any, res: any) => {
  const returnMsg: any = {
    message: `Deletion of user id ${req.params.user_id} was successful`
  }
  returnMsg.user_id = req.params.user_id;
  res.status(200).json(returnMsg);
});

module.exports = usersRouter;
export {};