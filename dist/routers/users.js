"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require('express');
const usersController = require('../controller/users');
const sessionController = require('../controller/session');
const { deleteResponseMessage } = require('../util/util');
const TYPE = 'transaction';
const usersRouter = express.Router();
usersRouter.get('/', usersController.getAllUsers, (req, res) => {
    res.status(200).json(res.locals.users);
});
usersRouter.get('/:userId', usersController.getUserById, (req, res) => {
    res.status(200).json(res.locals.user);
});
usersRouter.post('/login', sessionController.checkForSession, usersController.checkForUser, usersController.login, (req, res) => {
    res.status(200).json(res.locals.user);
});
usersRouter.post('/create', usersController.createUser, sessionController.createSSID, (req, res) => {
    res.status(200).json(res.locals.user);
});
usersRouter.patch('/:userId', usersController.updateUser, (req, res) => {
    res.status(200).json(res.locals.user);
});
usersRouter.delete('/:userId', usersController.deleteUser, (req, res) => {
    const returnMsg = {
        message: `Deletion of user id ${req.params.userId} was successful`
    };
    returnMsg.userId = req.params.userId;
    res.status(200).json(deleteResponseMessage(TYPE, req.params.userId));
});
module.exports = usersRouter;
//# sourceMappingURL=users.js.map