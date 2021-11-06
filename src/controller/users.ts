const db = require('../models/database');
const queries = require('./queries/users');
const bcrypt = require('bcrypt');
require('dotenv').config();

const  { SALT_ROUNDS } = process.env;

const usersController: any = {};

usersController.createUser = async (req: any, res: any, next: any) => {
  const { username, email, firstName, lastName } = req.body;
  const { password } = res.locals;

  const values: any = [username, password, email, firstName, lastName];

  const createResults = await db.query(queries.createUser, values);
  res.locals.user = createResults.rows;

  return next();
};

usersController.encryptPassword = async (req: any, res: any, next: any) => {
  const hash = await bcrypt.hash(req.body.password, parseInt(SALT_ROUNDS));
  res.locals.password = hash;

  return next();
};

module.exports = usersController;
export {};