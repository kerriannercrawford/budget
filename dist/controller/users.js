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
const user = require('../models/userModel');
const { checkResult, encryptPassword, validatePassword } = require('../util/util');
const usersController = {};
usersController.createUser = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { budgetName, email, username, password, firstName, lastName } = req.body;
    const hash = yield encryptPassword(password);
    const createdUser = yield user.create({
        budgetName,
        email,
        username,
        password: hash,
        firstName,
        lastName
    });
    checkResult(createdUser, next, 'Error: Unable to create user');
    res.locals.user = createdUser;
    return next();
});
usersController.checkForUser = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    if (res.locals.activeSession) {
        return next();
    }
    const foundUser = yield user.findOne({ username: req.body.username });
    checkResult(foundUser, next, 'Error: Unable to log in, user does not exist');
    res.locals.user = foundUser;
    return next();
});
usersController.login = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const correctPassword = yield validatePassword(req.body.password, res.locals.user.password);
    checkResult(correctPassword, next, 'Error logging in, username or password does not match');
    return next();
});
usersController.getAllUsers = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const users = yield user.find({});
    checkResult(users, next, 'Error: unable to load users');
    res.locals.users = users;
    return next();
});
usersController.getUserById = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    if (!res.locals.activeSession) {
        res.redirect('/api/users/login');
    }
    ;
    const foundUser = yield user.findById(req.params.userId);
    checkResult(foundUser, next, 'Error: invalid user id');
    res.locals.user = foundUser;
    return next();
});
usersController.updateUser = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    if (!res.locals.activeSession) {
        res.redirect('/api/users/login');
    }
    ;
    const query = { _id: req.params.userId };
    const updatedUser = yield user.findOneAndUpdate(query, req.body, { new: true });
    checkResult(updatedUser, next, 'Error: unable to update user');
    res.locals.user = updatedUser;
    return next();
});
usersController.deleteUser = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    if (!res.locals.activeSession) {
        res.redirect('/api/users/login');
    }
    ;
    const deletedUser = yield user.findOneAndDelete({ _id: req.params.userId });
    checkResult(deletedUser, next, 'Error: unable to delete user');
    res.locals.user = deletedUser;
    return next();
});
module.exports = usersController;
//# sourceMappingURL=users.js.map