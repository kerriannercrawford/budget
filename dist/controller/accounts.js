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
const accounts = require('../models/accountsModel');
const { checkResult } = require('../util/util');
const accountsController = {};
accountsController.createAccount = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { userId, accountName } = req.body;
    const createdAccount = yield accounts.create({
        name: {
            userId,
            accountName
        }
    });
    checkResult(createdAccount, next, 'Error: Unable to create account');
    res.locals.account = createdAccount;
    return next();
});
accountsController.getAllUserAccounts = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const foundAccounts = yield accounts.find({ userId: req.params.userId });
    checkResult(foundAccounts, next, 'Error: Unable to locate accounts');
    res.locals.accounts = foundAccounts;
    return next();
});
accountsController.getOneUserAccount = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const foundAccount = yield accounts.find({ _id: req.params.accountId });
    checkResult(foundAccount, next, 'Error: Unable to locate account');
    res.locals.account = foundAccount;
    return next();
});
accountsController.updateAccount = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const query = { _id: req.params.accountId };
    const updatedAccount = yield accounts.findOneAndUpdate(query, req.body, { new: true });
    checkResult(updatedAccount, next, 'Error: Unable to update account');
    res.locals.account = updatedAccount;
    return next();
});
accountsController.deleteUserAccount = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const deletedAccount = yield accounts.findOneAndDelete({ _id: req.params.accountId });
    checkResult(deletedAccount, next, 'Error: Unable to update account');
    res.locals.account = deletedAccount;
    return next();
});
module.exports = accountsController;
//# sourceMappingURL=accounts.js.map