"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require('express');
const accountsController = require('../controller/accounts');
const { deleteResponseMessage } = require('../util/util');
const TYPE = 'account';
const accountsRouter = express.Router();
accountsRouter.post('/', accountsController.createAccount, (req, res) => {
    res.status(200).json(res.locals.account);
});
accountsRouter.get('/user/:userId', accountsController.getAllUserAccounts, (req, res) => {
    res.status(200).json(res.locals.accounts);
});
accountsRouter.get('/account/:accountId', accountsController.getOneUserAccount, (req, res) => {
    res.status(200).json(res.locals.account);
});
accountsRouter.patch('/:accountId', accountsController.updateAccount, (req, res) => {
    res.status(200).json(res.locals.account);
});
accountsRouter.delete('/:accountId', accountsController.deleteUserAccount, (req, res) => {
    res.status(200).json(deleteResponseMessage(TYPE, req.params.accountId));
});
module.exports = accountsRouter;
//# sourceMappingURL=accounts.js.map