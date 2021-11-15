import { SessionController, UserController } from '../types/controller';
import { ExpressRes, ExpressReq, DeleteResponseMessage } from '../types/express';

const express = require('express');
const usersController: UserController = require('../controller/users');
const sessionController: SessionController = require('../controller/session');
const { deleteResponseMessage } = require('../util/util');
const TYPE = 'transaction';

const usersRouter = express.Router();

usersRouter.get('/', usersController.getAllUsers, (req: ExpressReq, res: ExpressRes) => {
  res.status(200).json(res.locals.users);
});

usersRouter.get('/:userId', usersController.getUserById, (req: ExpressReq, res: ExpressRes) => {
  res.status(200).json(res.locals.user);
});

usersRouter.post('/login', sessionController.checkForSession, usersController.checkForUser, usersController.login, sessionController.createSSID, (req: ExpressReq, res: ExpressRes) => {
  res.status(200).json(res.locals.user);
});

usersRouter.post('/create', usersController.createUser, sessionController.createSSID, (req: ExpressReq, res: ExpressRes) => {
  res.status(200).json(res.locals.user);
});

usersRouter.patch('/:userId', usersController.updateUser, (req: ExpressReq, res: ExpressRes) => {
  res.status(200).json(res.locals.user);
});

usersRouter.delete('/:userId', usersController.deleteUser, (req: ExpressReq, res: ExpressRes) => {
  const returnMsg: DeleteResponseMessage = {
    message: `Deletion of user id ${req.params.userId} was successful`
  };
  returnMsg.userId = req.params.userId;
  res.status(200).json(deleteResponseMessage(TYPE, req.params.userId));
});

module.exports = usersRouter;
export {};