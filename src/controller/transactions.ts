import { TransactionController } from '../../src/types/controller';
import { ExpressReq, ExpressRes, ExpressNext } from '../../src/types/express';

const transactions = require('../models/transactionsModel');
const categories = require('../models/categoryModel');
const groups = require('../models/groupsModel');
const accounts = require('../models/accountsModel');

const { checkResult, updateBalance, getMonth, getYear } = require('../util/util');

const transactionsController: TransactionController = {};

transactionsController.createTransaction = async (req: ExpressReq, res: ExpressRes, next: ExpressNext) => {
  const { accountId, groupId, categoryId, payeeId, userId, outflow, inflow, memo, cleared, date } = req.body;

  const transactionInformation: any = {
    accountId,
    groupId,
    categoryId,
    payeeId,
    userId
  };

  if (date) transactionInformation.date = date;
  if (outflow) transactionInformation.outflow = outflow;
  if (inflow) transactionInformation.inflow = inflow;
  if (memo) transactionInformation.memo = memo;
  if (cleared) transactionInformation.cleared = cleared;

  const createdTransaction = await transactions.create(transactionInformation);

  checkResult(createdTransaction, next, 'Error: Unable to create transaction');
  res.locals.transaction = createdTransaction;
  return next();
};

transactionsController.updateCategoryBalance = async(req: ExpressReq, res: ExpressRes, next: ExpressNext) => {
  const { categoryId, date, userId, outflow, inflow } = res.locals.transaction;
  // use correct methods to grab year and month 
  const year = getYear(date);
  const month = getMonth(date);
  res.locals.year = year;
  res.locals.month = month;
 
  const category = await categories.find({
    _id: categoryId,
    userId,
    year,
    month
  });

  const categoryUpdate = {
    assigned: category.assigned,
    activity: category.activity,
    available: category.available
  };

  if (inflow) categoryUpdate.activity += inflow;
  if (outflow) categoryUpdate.activity -= outflow;

  categoryUpdate.available = category.assigned - categoryUpdate.activity;

  const updatedCategory = await categories.findOneAndUpdate({ _id: categoryId }, categoryUpdate);

  res.locals.category = updatedCategory;
  return next();
};

transactionsController.updateGroupBalance = async (req: ExpressReq, res: ExpressRes, next: ExpressNext) => {
  const { groupId, userId, date, outflow, inflow } = res.locals.transaction;

  const year = res.locals.year;
  const month = res.locals.month;

  const group = await groups.find({ 
    _id: groupId,
    userId,
    year,
    month
  });

  const groupUpdate = {
    assigned: group.assigned,
    activity: group.activity,
    available: group.available
  };

  if (inflow) groupUpdate.activity += inflow;
  if (outflow) groupUpdate.activity -= outflow;

  groupUpdate.available = groupUpdate.assigned - groupUpdate.activity;

  const updatedGroup = await groups.findOneAndUpdate({ _id: groupId}, groupUpdate);

  res.locals.group = updatedGroup;
  return next();
};

transactionsController.updateAccountBalance = async (req: ExpressReq, res: ExpressRes, next: ExpressNext) => {
  const { accountId, userId, date, outflow, inflow, cleared } = res.locals.transaction;
  const year = res.locals.year;
  const month = res.locals.month;

  const account = await accounts.find({
    _id: accountId,
    userId,
    year,
    month
  });

  const accountUpdate: any = {};

  if (cleared) {
    accountUpdate.clearedBalance = updateBalance(inflow, outflow, account.clearedBalance)
  } else {
    accountUpdate.unclearedBalance = updateBalance(inflow, outflow, account.unclearedBalance)
  }

  const updatedAccount = await accounts.findOneAndUpdate({ _id: accountId}, accountUpdate);

  res.locals.account = updatedAccount;
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