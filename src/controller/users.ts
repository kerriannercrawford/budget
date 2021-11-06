const db = require('../models/database');
const queries = require('./queries/users');
const util = require('../util/util')

const usersController: any = {};

usersController.createUser = async (req: any, res: any, next: any) => {
  const { username, email, firstName, lastName } = req.body;
  const password = await util.encryptPassword(req.body.password);

  const values: any = [username, password, email, firstName, lastName];

  const createResults = await db.query(queries.createUser, values);
  res.locals.user = createResults.rows;

  return next();
};

usersController.checkForUser = async (req: any, res: any, next: any) => {
  const userResults = await db.query(queries.login, [req.body.username]);
  if (!userResults || !userResults.rows) {
    return next({
      log: 'Error in Check For User: user does not exist',
      message: {
        err: 'user does not exist'
      }
    })
  }
  res.locals.user = userResults.rows;
  return next();
}

usersController.login = async (req: any, res: any, next: any) => {
  console.log(req.body.password)
  const correctPassword = await util.validatePassword(req.body.password, res.locals.user[0].password);
  if (!correctPassword) {
    return next({
      log: 'Error logging in, username or password does not match',
      message: {
        err: 'username or password does not match'
      }
    })
  }

  return next();
}

module.exports = usersController;
export {};