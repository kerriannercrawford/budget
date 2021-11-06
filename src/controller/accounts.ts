import { AccountController } from '../../src/types/controller';
import { ExpressRes, ExpressReq, ExpressNext } from '../../src/types/express';

const db = require('../models/database');
const queries = require('./queries/accounts');

const accountsController: AccountController = {};

accountsController.createAccount = async (req: ExpressReq, res: ExpressRes, next: ExpressNext) => {
  const { user_id, name, active, clearedBalance, unclearedBalance } = req.body;
  const values = [user_id, name, active, clearedBalance, unclearedBalance];
  const account = await db.query(queries.createAccount, values);
  res.locals.account = account.rows;

  return next();
};

accountsController.getAllUserAccounts = async (req: ExpressReq, res: ExpressRes, next: ExpressNext) => {
  const accounts = await db.query(queries.getAllUserAccounts, [req.params.user_id]);
  res.locals.accounts = accounts.rows;

  return next();
};

accountsController.getOneUserAccount = async (req: ExpressReq, res: ExpressRes, next: ExpressNext) => {
  const { user_id, account_id } = req.params;
  const account = await db.query(queries.getOneUserAccount, [user_id, account_id]);
  res.locals.account = account.rows;

  return next();
};

accountsController.updateAccount = async (req: ExpressReq, res: ExpressRes, next: ExpressNext) => {
  const { queryString, values } = await queries.updateAccount(req.body, req.params.account_id);
  const updatedAccount = await db.query(queryString, values);
  res.locals.account = updatedAccount.rows;

  return next();
};

accountsController.deleteUserAccount = async (req: ExpressReq, res: ExpressRes, next: ExpressNext) => {
  const account = await db.query(queries.deleteUserAccount, [req.params.account_id]);
  res.locals.account = account.rows;

  return next();
};

module.exports = accountsController;
export {};
