import { UserController } from '../../src/types/controller';
import { ExpressRes, ExpressReq, ExpressNext } from '../../src/types/express';

const db = require('../models/database');
const queries = require('./queries/users');
const util = require('../util/util');

const usersController: UserController = {};

usersController.createUser = async (req: ExpressReq, res: ExpressRes, next: ExpressNext) => {
  const { username, email, firstName, lastName } = req.body;
  const password = await util.encryptPassword(req.body.password);

  const values = [username, password, email, firstName, lastName];

  const createResults = await db.query(queries.createUser, values);
  res.locals.user = createResults.rows;

  return next();
};

usersController.checkForUser = async (req: ExpressReq, res: ExpressRes, next: ExpressNext) => {
  const userResults = await db.query(queries.login, [req.body.username]);
  if (!userResults || !userResults.rows) {
    return next({
      log: 'Error in Check For User: user does not exist',
      message: {
        err: 'user does not exist'
      }
    });
  }
  res.locals.user = userResults.rows;

  return next();
};

usersController.login = async (req: ExpressReq, res: ExpressRes, next: ExpressNext) => {
  const correctPassword = await util.validatePassword(req.body.password, res.locals.user[0].password);
  if (!correctPassword) {
    return next({
      log: 'Error logging in, username or password does not match',
      message: {
        err: 'username or password does not match'
      }
    });
  }

  return next();
};

usersController.getAllUsers = async (req: ExpressReq, res: ExpressRes, next: ExpressNext) => {
  const users = await db.query(queries.getAllUsers);
  res.locals.users = users.rows;

  return next();
};

usersController.getUserById = async (req: ExpressReq, res: ExpressRes, next: ExpressNext) => {
  const user = await db.query(queries.getUserById, [req.params.user_id]);
  res.locals.user = user.rows;

  return next();
};

usersController.updateUser = async (req: ExpressReq, res: ExpressRes, next: ExpressNext) => {
  const { queryString, values } = await queries.updateUser(req.body, req.params.user_id);
  const updatedUser = await db.query(queryString, values);
  res.locals.user = updatedUser.rows;

  return next();
};

usersController.deleteUser = async (req: ExpressReq, res: ExpressRes, next: ExpressNext) => {
  const user = await db.query(queries.deleteUser, [req.params.user_id]);

  return next();
};

module.exports = usersController;
export {};