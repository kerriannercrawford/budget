import { UserController } from '../../src/types/controller';
import { ExpressRes, ExpressReq, ExpressNext } from '../../src/types/express';

const user = require('../models/userModel');
const { checkResult, encryptPassword, validatePassword } = require('../util/util');

const usersController: UserController = {};

usersController.createUser = async (req: ExpressReq, res: ExpressRes, next: ExpressNext) => {
  const { budgetName, email, username, password, firstName, lastName } = req.body;
  const hash = await encryptPassword(password);
  const createdUser = await user.create({ 
    budgetName,
    email,
    username,
    password: hash,
    firstName,
    lastName
   })
   checkResult(createdUser, next, 'Error: Unable to create user');
   res.locals.user = createdUser;
  return next();
};

usersController.checkForUser = async (req: ExpressReq, res: ExpressRes, next: ExpressNext) => {
  const foundUser = await user.findOne({ username: req.body.username });
  checkResult(foundUser, next, 'Error: Unable to log in, user does not exist');
  res.locals.user = foundUser;
  return next();
};

usersController.login = async (req: ExpressReq, res: ExpressRes, next: ExpressNext) => {
  const correctPassword = await validatePassword(req.body.password, res.locals.user.password);
  checkResult(correctPassword, next, 'Error logging in, username or password does not match');
  return next();
};

usersController.getAllUsers = async (req: ExpressReq, res: ExpressRes, next: ExpressNext) => {
  const users = await user.find({});
  checkResult(users, next, 'Error: unable to load users');
  res.locals.users = users;
  return next();
};

usersController.getUserById = async (req: ExpressReq, res: ExpressRes, next: ExpressNext) => {
  const foundUser = await user.findById(req.params.userId);
  checkResult(foundUser, next, 'Error: invalid user id');
  res.locals.user = foundUser;
  return next();
};

usersController.updateUser = async (req: ExpressReq, res: ExpressRes, next: ExpressNext) => {
  const query = { _id: req.params.userId }
  const updatedUser = await user.findOneAndUpdate(query, req.body, { new: true });
  checkResult(updatedUser, next, 'Error: unable to update user');
  res.locals.user = updatedUser;
  return next();
};

usersController.deleteUser = async (req: ExpressReq, res: ExpressRes, next: ExpressNext) => {
  if (!res.locals.activeSession) {
    res.redirect('/api/users/login')
  };
  const deletedUser = await user.findOneAndDelete({ _id: req.params.userId });
  checkResult(deletedUser, next, 'Error: unable to delete user');
  res.locals.user = deletedUser;
  return next();
};

module.exports = usersController;
export {};