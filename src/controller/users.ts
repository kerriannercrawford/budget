import { UserController } from '../../src/types/controller';
import { ExpressRes, ExpressReq, ExpressNext } from '../../src/types/express';

const user = require('../models/userModel');
const util = require('../util/util');

const usersController: UserController = {};

usersController.createUser = async (req: ExpressReq, res: ExpressRes, next: ExpressNext) => {
  const { budgetName, email, username, password, firstName, lastName } = req.body;
  const hash = await util.encryptPassword(password);
  const createdUser = await user.create({ 
    budgetName,
    email,
    username,
    password: hash,
    firstName,
    lastName,
    accountsId: [],
    categoriesId: [],
    groupsId: [],
    payeesId: [],
    transactions: []
   })
   res.locals.user = createdUser;
  return next();
};

usersController.checkForUser = async (req: ExpressReq, res: ExpressRes, next: ExpressNext) => {
  const foundUser = await user.findOne({ username: req.body.username });
  if (!foundUser) {
    return next({
      log: 'Error: User does not exist',
      message: {
        err: 'Error: Unable to log in, user does not exist'
      }
    })
  }
  res.locals.user = foundUser;
  return next();
};

usersController.login = async (req: ExpressReq, res: ExpressRes, next: ExpressNext) => {
  const correctPassword = await util.validatePassword(req.body.password, res.locals.user.password);
  if (!correctPassword) {
    return next({
      log: 'Error logging in, username or password does not match',
      message: {
        err: 'username or password does not match'
      }
    })
  }
  return next();
};

usersController.getAllUsers = async (req: ExpressReq, res: ExpressRes, next: ExpressNext) => {
  const users = await user.find();
  if (!users) {
    return next({
      log: 'Error: unable to load users',
      message: {
        err: 'Error: unable to load users'
      }
    })
  }
  res.locals.users = users;
  return next();
};

usersController.getUserById = async (req: ExpressReq, res: ExpressRes, next: ExpressNext) => {
  const foundUser = await user.findById(req.params.userId);
  if (!foundUser) {
    return next({
      log: 'Error: invalid user id',
      message: {
        err: 'Error: Invalid user id'
      }
    })
  }
  res.locals.user = foundUser;
  return next();
};

usersController.updateUser = async (req: ExpressReq, res: ExpressRes, next: ExpressNext) => {
  const query = { _id: req.params.userId }
  const updatedUser = await user.findOneAndUpdate(query, req.body, { new: true });
  if (!updatedUser) {
    return next({
      log: 'Error: unable to update user',
      message: {
        err: 'Error: unable to update user'
      }
    })
  }
  res.locals.user = updatedUser;
  return next();
};

usersController.deleteUser = async (req: ExpressReq, res: ExpressRes, next: ExpressNext) => {
  const deletedUser = await user.findOneAndDelete({ _id: req.params.userId });
  if (!deletedUser) {
    return next({
      log: 'Error: unable to delete user',
      message: {
        err: 'Error: unable to delete user'
      }
    })
  }
  res.locals.user = deletedUser;
  return next();
};

module.exports = usersController;
export {};