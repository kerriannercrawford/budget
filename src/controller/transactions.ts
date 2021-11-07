import { TransactionController } from '../../src/types/controller';
import { ExpressReq, ExpressRes, ExpressNext } from '../../src/types/express';

const transactions = require('../models/transactionsModel');
const { checkResult } = require('../util/util');

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
  });
  checkResult(createdTransaction, next, 'Error: Unable to create transaction');
  res.locals.transaction = createdTransaction;
  return next();
};

transactionsController.updateCategoryBalance = (req: ExpressReq, res: ExpressRes, next: ExpressNext) => {
  // Get Category - assigned / activity / available 
  // Get inflow and / or outflow from req.body 
  // Mathhhhhh
  // Update Category
  return next();
};

transactionsController.updateGroupBalance = (req: ExpressReq, res: ExpressRes, next: ExpressNext) => {
  // Get Group - assigned / activity / available
  // Get inflow and / or outflow from req.body
  // Mathhhhhh
  // Update Group
  return next();
};

transactionsController.updateAccountBalance = (req: ExpressReq, res: ExpressRes, next: ExpressNext) => {
  // Get Account - cleared/uncleared 
  // Get inflow and / or outflow as well as cleared from req.body
  // Mathhhhhhh
  // Update Account
  return next();
};

transactionsController.getAllUserTransactions = async (req: ExpressReq, res: ExpressRes, next: ExpressNext) => {
  const foundTransactions = await transactions.find({ userId: req.params.userId });
  checkResult(foundTransactions, next, 'Error: Unable to locate transactions');
  res.locals.transactions = foundTransactions;
  return next();
};

transactionsController.getAllAccountTransactions = async (req: ExpressReq, res: ExpressRes, next: ExpressNext) => {
  const foundTransactions = await transactions.find({ accountId: req.params.accountId });
  checkResult(foundTransactions, next, 'Error: Unable to locate transactions');
  res.locals.transactions = foundTransactions;
  return next();
};

transactionsController.getOneUserTransaction = async (req: ExpressReq, res: ExpressRes, next: ExpressNext) => {
  const foundTransaction = await transactions.find({ _id: req.params.transactionId });
  checkResult(foundTransaction, next, 'Error: Unable to locate transactions');
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
  checkResult(updatedTransaction, next, 'Error: Unable to update account');
  res.locals.transaction = updatedTransaction;
  return next();
};

transactionsController.deleteTransaction = async (req: ExpressReq, res: ExpressRes, next: ExpressNext) => {
  const deletedTransaction = await transactions.findOneAndDelete({ _id: req.params.transactionId });
  checkResult(deletedTransaction, next, 'Error: Unable to delete transactions');
  res.locals.transaction = deletedTransaction;
  return next();
};

module.exports = transactionsController;
export {};