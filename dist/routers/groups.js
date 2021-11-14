"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require('express');
const groupsController = require('../controller/groups');
const { deleteResponseMessage } = require('../util/util');
const TYPE = 'group';
const groupsRouter = express.Router();
groupsRouter.post('/', groupsController.createGroup, (req, res) => {
    res.status(200).json(res.locals.group);
});
groupsRouter.get('/user/:userId', groupsController.getAllUserGroups, (req, res) => {
    res.status(200).json(res.locals.groups);
});
groupsRouter.get('/group/:groupId', groupsController.getOneUserGroup, (req, res) => {
    res.status(200).json(res.locals.group);
});
groupsRouter.patch('/:groupId', groupsController.updateGroup, (req, res) => {
    res.status(200).json(res.locals.group);
});
groupsRouter.delete('/:groupId', groupsController.deleteGroup, (req, res) => {
    res.status(200).json(deleteResponseMessage(TYPE, req.params.groupId));
});
module.exports = groupsRouter;
//# sourceMappingURL=groups.js.map