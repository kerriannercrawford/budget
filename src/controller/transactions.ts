import { TransactionQuery } from '../../src/types/queries';
import { TransactionController } from '../../src/types/controller';
import { ExpressReq, ExpressRes, ExpressNext } from '../../src/types/express';

const db = require('../models/database');
const queries: TransactionQuery = require('./queries/transactions');

const transactionsController: TransactionController = {};

transactionsController.createTransaction = async (req: ExpressReq, res: ExpressRes, next: ExpressNext) => {
  const { user_id, account_id, date, payee_id, category_id, memo, outflow, inflow, cleared } = req.body;
  console.log(req.body);
  const values = [user_id, account_id, date, payee_id, category_id, memo, outflow, inflow, cleared];
  console.log(values);
  console.log(queries.createTransaction);
  const transaction = await db.query(queries.createTransaction, values);
  res.locals.transaction = transaction.rows;

  return next();
};

transactionsController.getAllUserTransactions = async (req: ExpressReq, res: ExpressRes, next: ExpressNext) => {
  const transactions = await db.query(queries.getAllUserTransactions, [req.params.user_id]);
  res.locals.transactions = transactions.rows;

  return next();
};

transactionsController.getAllAccountTransactions = async (req: ExpressReq, res: ExpressRes, next: ExpressNext) => {
  const transactions = await db.query(queries.getAllAccountTransactions, [req.params.account_id]);
  res.locals.transactions = transactions.rows;

  return next();
};

transactionsController.getOneUserTransaction = async (req: ExpressReq, res: ExpressRes, next: ExpressNext) => {
  const { user_id, account_id } = req.params;
  console.log(queries.getOneUserTransaction);
  const transaction = await db.query(queries.getOneUserTransaction, [user_id, account_id]);
  res.locals.transaction = transaction.rows;

  return next();
};

transactionsController.updateTransaction = async (req: ExpressReq, res: ExpressRes, next: ExpressNext) => {
  const { queryString, values } = await queries.updateTransaction(req.body, req.params.transaction_id);
  const transaction = await db.query(queryString, values);
  res.locals.transaction = transaction.rows;

  return next();
};

transactionsController.deleteTransaction = async (req: ExpressReq, res: ExpressRes, next: ExpressNext) => {
  const transaction = await db.query(queries.deleteTransaction, [req.params.transaction_id]);
  res.locals.transaction = transaction.rows;

  return next();
};

transactionsController.getTransactionMemoById = async (req: ExpressReq, res: ExpressRes, next: ExpressNext) => {
  const memo = await db.query(queries.getTransactionMemoById, [req.params.transaction_id]);
  res.locals.memo = memo.rows;
  return next();
};

module.exports = transactionsController;
export {};