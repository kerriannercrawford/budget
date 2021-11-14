"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require('express');
const payeesController = require('../controller/payees');
const { deleteResponseMessage } = require('../util/util');
const TYPE = 'payee';
const payeesRouter = express.Router();
payeesRouter.post('/', payeesController.createPayee, (req, res) => {
    res.status(200).json(res.locals.payee);
});
payeesRouter.get('/user/:userId', payeesController.getAllUserPayees, (req, res) => {
    res.status(200).json(res.locals.payees);
});
payeesRouter.get('/payee/:payeeId', payeesController.getOneUserPayee, (req, res) => {
    res.status(200).json(res.locals.payee);
});
payeesRouter.patch('/:payeeId', payeesController.updatePayee, (req, res) => {
    res.status(200).json(res.locals.payee);
});
payeesRouter.delete('/:payeeId', payeesController.deletePayee, (req, res) => {
    res.status(200).json(deleteResponseMessage(TYPE, req.params.payeeId));
});
module.exports = payeesRouter;
//# sourceMappingURL=payees.js.map