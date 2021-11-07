import { TransactionQuery } from '../../src/types/queries';
import { TransactionController } from '../../src/types/controller';
import { ExpressReq, ExpressRes, ExpressNext } from '../../src/types/express';

const transactions = require('../models/transactionsModel');

const transactionsController: TransactionController = {};

// TO DO: Add logic to manage category / group balances
transactionsController.createTransaction = async (req: ExpressReq, res: ExpressRes, next: ExpressNext) => {
  const { accountId, groupId, categoryId, payeeId, userId } = req.body;
  const createdTransaction = await transactions.create({
    accountId,
    groupId,
    categoryId,
    payeeId,
    userId
  })
  if (!createdTransaction) {
    return next({
      log: 'Error: Unable to create transaction',
      message: {
        err: 'Error: Unable to create transaction'
      }
    })
  }
  res.locals.transaction = createdTransaction;
  return next();
};

transactionsController.getAllUserTransactions = async (req: ExpressReq, res: ExpressRes, next: ExpressNext) => {
  const foundTransactions = await transactions.find({ userId: req.params.userId });
  if (!foundTransactions) {
    return next({
      log: 'Error: Unable to locate transactions',
      message: {
        err: 'Error: Unable to locate transactions'
      }
    })
  }
  res.locals.transactions = foundTransactions;
  return next();
};

transactionsController.getAllAccountTransactions = async (req: ExpressReq, res: ExpressRes, next: ExpressNext) => {
  const foundTransactions = await transactions.find({ accountId: req.params.accountId });
  if (!foundTransactions) {
    return next({
      log: 'Error: Unable to locate transactions',
      message: {
        err: 'Error: Unable to locate transactions'
      }
    })
  }
  res.locals.transactions = foundTransactions;
  return next();
};

transactionsController.getOneUserTransaction = async (req: ExpressReq, res: ExpressRes, next: ExpressNext) => {
  const foundTransaction = await transactions.find({ _id: req.params.transactionId });
  if (!foundTransaction) {
    return next({
      log: 'Error: Unable to locate transactions',
      message: {
        err: 'Error: Unable to locate transactions'
      }
    })
  }
  res.locals.transaction = foundTransaction;
  return next();
};

transactionsController.updateTransaction = async (req: ExpressReq, res: ExpressRes, next: ExpressNext) => {
  const query = { _id: req.params.transactionId };
  const updatedTransaction = await transactions.findOneAndUpdate(
    query, 
    req.body,
    { new: true }
  );
  if (!updatedTransaction) {
    return next({
      log: 'Error: Unable to update account',
      message: {
        err: 'Error: Unable to update account'
      }
    })
  }
  res.locals.transaction = updatedTransaction;
  return next();
};

transactionsController.deleteTransaction = async (req: ExpressReq, res: ExpressRes, next: ExpressNext) => {
  const deletedTransaction = await transactions.findOneAndDelete({ _id: req.params.transactionId });
  if (!deletedTransaction) {
    return next({
      log: 'Error: Unable to delete transactions',
      message: {
        err: 'Error: Unable to delete transactions'
      }
    })
  }
  res.locals.transaction = deletedTransaction;
  return next();
};

module.exports = transactionsController;
export {};