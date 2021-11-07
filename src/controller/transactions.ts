import { TransactionQuery } from '../../src/types/queries';
import { TransactionController } from '../../src/types/controller';
import { ExpressReq, ExpressRes, ExpressNext } from '../../src/types/express';

const transactions = require('../models/transactionsModel');
const queries: TransactionQuery = require('./queries/transactions');

const transactionsController: TransactionController = {};

transactionsController.createTransaction = async (req: ExpressReq, res: ExpressRes, next: ExpressNext) => {

  return next();
};

transactionsController.getAllUserTransactions = async (req: ExpressReq, res: ExpressRes, next: ExpressNext) => {

  return next();
};

transactionsController.getAllAccountTransactions = async (req: ExpressReq, res: ExpressRes, next: ExpressNext) => {

  return next();
};

transactionsController.getOneUserTransaction = async (req: ExpressReq, res: ExpressRes, next: ExpressNext) => {

  return next();
};

transactionsController.updateTransaction = async (req: ExpressReq, res: ExpressRes, next: ExpressNext) => {

  return next();
};

transactionsController.deleteTransaction = async (req: ExpressReq, res: ExpressRes, next: ExpressNext) => {

  return next();
};

transactionsController.getTransactionMemoById = async (req: ExpressReq, res: ExpressRes, next: ExpressNext) => {

  return next();
};

module.exports = transactionsController;
export {};