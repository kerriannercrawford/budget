import { UserController } from '../../src/types/controller';
import { ExpressRes, ExpressReq, ExpressNext } from '../../src/types/express';

const db = require('../models/database');
const queries = require('./queries/users');
const util = require('../util/util');

const usersController: UserController = {};

usersController.createUser = async (req: ExpressReq, res: ExpressRes, next: ExpressNext) => {

  return next();
};

usersController.checkForUser = async (req: ExpressReq, res: ExpressRes, next: ExpressNext) => {

  return next();
};

usersController.login = async (req: ExpressReq, res: ExpressRes, next: ExpressNext) => {

  return next();
};

usersController.getAllUsers = async (req: ExpressReq, res: ExpressRes, next: ExpressNext) => {

  return next();
};

usersController.getUserById = async (req: ExpressReq, res: ExpressRes, next: ExpressNext) => {

  return next();
};

usersController.updateUser = async (req: ExpressReq, res: ExpressRes, next: ExpressNext) => {

  return next();
};

usersController.deleteUser = async (req: ExpressReq, res: ExpressRes, next: ExpressNext) => {

  return next();
};

module.exports = usersController;
export {};