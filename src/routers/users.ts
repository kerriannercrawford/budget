import { UserController } from '../../src/types/controller';
import { ExpressRes, ExpressReq, DeleteResponseMessage } from '../../src/types/express';

const express = require('express');
const usersController: UserController = require('../controller/users');
const usersRouter = express.Router();

usersRouter.get('/', usersController.getAllUsers, (req: ExpressReq, res: ExpressRes) => {
  res.status(200).json(res.locals.users);
});

usersRouter.get('/:userId', usersController.getUserById, (req: ExpressReq, res: ExpressRes) => {
  res.status(200).json(res.locals.user);
});

// usersRouter.get('/username/:user_id', usersController.getUsernameById, (req: ExpressReq, res: ExpressRes) => {
//   res.status(200).json(res.locals.username);
// })

usersRouter.post('/login', usersController.checkForUser, usersController.login, (req: ExpressReq, res: ExpressRes) => {
  res.status(200).json(res.locals.user);
});

usersRouter.post('/create', usersController.createUser, (req: ExpressReq, res: ExpressRes) => {
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
  res.status(200).json(returnMsg);
});

module.exports = usersRouter;
export {};