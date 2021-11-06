const db = require('../models/database');
const queries = require('./queries/accounts');

const accountsController: any = {};

accountsController.createAccount = async (req: any, res: any, next: any) => {
  const { userId, name, active, clearedBalance, unclearedBalance } = req.body;
  const values = [userId, name, active, clearedBalance, unclearedBalance];
  const account = await db.query(queries.createAccount, values);
  res.locals.account = account.rows; 
  return next();
}

module.exports = accountsController;
export {};
