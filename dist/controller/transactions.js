"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const transactions = require('../models/transactionsModel');
const { checkResult } = require('../util/util');
const transactionsController = {};
// TO DO: Add logic to manage category / group balances
transactionsController.createTransaction = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { accountId, groupId, categoryId, payeeId, userId } = req.body;
    const createdTransaction = yield transactions.create({
        accountId,
        groupId,
        categoryId,
        payeeId,
        userId
    });
    checkResult(createdTransaction, next, 'Error: Unable to create transaction');
    res.locals.transaction = createdTransaction;
    return next();
});
transactionsController.updateCategoryBalance = (req, res, next) => {
    // Get Category - assigned / activity / available 
    // Get inflow and / or outflow from req.body 
    // Mathhhhhh
    // Update Category
    return next();
};
transactionsController.updateGroupBalance = (req, res, next) => {
    // Get Group - assigned / activity / available
    // Get inflow and / or outflow from req.body
    // Mathhhhhh
    // Update Group
    return next();
};
transactionsController.updateAccountBalance = (req, res, next) => {
    // Get Account - cleared/uncleared 
    // Get inflow and / or outflow as well as cleared from req.body
    // Mathhhhhhh
    // Update Account
    return next();
};
transactionsController.getAllUserTransactions = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const foundTransactions = yield transactions.find({ userId: req.params.userId });
    checkResult(foundTransactions, next, 'Error: Unable to locate transactions');
    res.locals.transactions = foundTransactions;
    return next();
});
transactionsController.getAllAccountTransactions = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const foundTransactions = yield transactions.find({ accountId: req.params.accountId });
    checkResult(foundTransactions, next, 'Error: Unable to locate transactions');
    res.locals.transactions = foundTransactions;
    return next();
});
transactionsController.getOneUserTransaction = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const foundTransaction = yield transactions.find({ _id: req.params.transactionId });
    checkResult(foundTransaction, next, 'Error: Unable to locate transactions');
    res.locals.transaction = foundTransaction;
    return next();
});
transactionsController.updateTransaction = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const query = { _id: req.params.transactionId };
    const updatedTransaction = yield transactions.findOneAndUpdate(query, req.body, { new: true });
    checkResult(updatedTransaction, next, 'Error: Unable to update account');
    res.locals.transaction = updatedTransaction;
    return next();
});
transactionsController.deleteTransaction = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const deletedTransaction = yield transactions.findOneAndDelete({ _id: req.params.transactionId });
    checkResult(deletedTransaction, next, 'Error: Unable to delete transactions');
    res.locals.transaction = deletedTransaction;
    return next();
});
module.exports = transactionsController;
//# sourceMappingURL=transactions.js.map