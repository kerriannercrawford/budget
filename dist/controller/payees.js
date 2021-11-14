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
const payees = require('../models/payeeModel');
const { checkResult } = require('../util/util');
const payeesController = {};
payeesController.createPayee = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { payeeName, userId } = req.body;
    const createdPayee = yield payees.create({
        name: { payeeName, userId },
        userId
    });
    checkResult(createdPayee, next, 'Error: Unable to create payee');
    res.locals.payee = createdPayee;
    return next();
});
payeesController.getAllUserPayees = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const returnedPayees = yield payees.find({ userId: req.params.userId });
    checkResult(returnedPayees, next, 'Error: Unable to load payees');
    res.locals.payees = returnedPayees;
    return next();
});
payeesController.getOneUserPayee = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const returnedPayee = yield payees.findById(req.params.payeeId);
    checkResult(returnedPayee, next, 'Error: Unable to locate payee');
    res.locals.payee = returnedPayee;
    return next();
});
payeesController.updatePayee = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const query = { _id: req.params.payeeId };
    const updatedPayee = yield payees.findOneAndUpdate(query, req.body, { new: true });
    checkResult(updatedPayee, next, 'Error: Unable to update payee');
    res.locals.payee = updatedPayee;
    return next();
});
payeesController.deletePayee = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const deletedPayee = yield payees.findOneAndDelete({ _id: req.params.payeeId });
    checkResult(deletedPayee, next, 'Error: Unable to delete payee');
    res.locals.payee = deletedPayee;
    return next();
});
module.exports = payeesController;
//# sourceMappingURL=payees.js.map