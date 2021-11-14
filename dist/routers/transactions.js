"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require('express');
const transactionsController = require('../controller/transactions');
const { deleteResponseMessage } = require('../util/util');
const TYPE = 'transaction';
const transactionsRouter = express.Router();
transactionsRouter.post('/', transactionsController.createTransaction, transactionsController.updateCategoryBalance, transactionsController.updateGroupBalance, transactionsController.updateAccountBalance, (req, res) => {
    res.status(200).json(res.locals.transaction);
});
transactionsRouter.get('/user/:userId', transactionsController.getAllUserTransactions, (req, res) => {
    res.status(200).json(res.locals.transactions);
});
transactionsRouter.get('/account/:accountId', transactionsController.getAllAccountTransactions, (req, res) => {
    res.status(200).json(res.locals.transactions);
});
transactionsRouter.get('/transaction/:transactionId', transactionsController.getOneUserTransaction, (req, res) => {
    res.status(200).json(res.locals.transaction);
});
transactionsRouter.patch('/:transactionId', transactionsController.updateTransaction, transactionsController.updateCategoryBalance, transactionsController.updateGroupBalance, transactionsController.updateAccountBalance, (req, res) => {
    res.status(200).json(res.locals.transaction);
});
transactionsRouter.delete('/:transactionId', transactionsController.deleteTransaction, (req, res) => {
    res.status(200).json(deleteResponseMessage(TYPE, req.params.transactionId));
});
module.exports = transactionsRouter;
//# sourceMappingURL=transactions.js.map