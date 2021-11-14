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
const groups = require('../models/groupsModel');
const { checkResult } = require('../util/util');
const groupsController = {};
groupsController.createGroup = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { groupName, userId } = req.body;
    const createdGroup = yield groups.create({
        name: {
            userId,
            groupName
        },
        userId
    });
    checkResult(createdGroup, next, 'Error: unable to create group');
    res.locals.group = createdGroup;
    return next();
});
groupsController.getAllUserGroups = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const foundGroups = yield groups.find({ userId: req.params.userId });
    checkResult(foundGroups, next, 'Error: Unable to locate groups');
    res.locals.groups = foundGroups;
    return next();
});
groupsController.getOneUserGroup = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const foundGroup = yield groups.find({ _id: req.params.groupId });
    checkResult(foundGroup, next, 'Error: Unable to locate group with that id');
    res.locals.group = foundGroup;
    return next();
});
groupsController.updateGroup = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const query = { _id: req.params.groupId };
    const updatedGroup = yield groups.findOneAndUpdate(query, req.body, { new: true });
    checkResult(updatedGroup, next, 'Error: Unable to update group');
    res.locals.group = updatedGroup;
    return next();
});
groupsController.deleteGroup = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const deletedGroup = yield groups.findOneAndDelete({ _id: req.params.groupId });
    checkResult(deletedGroup, next, 'Error: Unable to delete group');
    res.locals.group = deletedGroup;
    return next();
});
module.exports = groupsController;
//# sourceMappingURL=groups.js.map