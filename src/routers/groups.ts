import { GroupController } from '../../src/types/controller';
import { ExpressRes, ExpressReq, DeleteResponseMessage } from '../../src/types/express';

const express = require('express');
const groupsController: GroupController = require('../controller/groups');
const { deleteResponseMessage } = require('../util/util');
const TYPE = 'group';

const groupsRouter = express.Router();

groupsRouter.post('/', groupsController.createGroup, (req: ExpressReq, res: ExpressRes) => {
  res.status(200).json(res.locals.group);
});

groupsRouter.get('/user/:userId', groupsController.getAllUserGroups, (req: ExpressReq, res: ExpressRes) => {
  res.status(200).json(res.locals.groups);
});

groupsRouter.get('/group/:groupId', groupsController.getOneUserGroup, (req: ExpressReq, res: ExpressRes) => {
  res.status(200).json(res.locals.group);
});

groupsRouter.patch('/:groupId', groupsController.updateGroup, (req: ExpressReq, res: ExpressRes) => {
  res.status(200).json(res.locals.group);
});

groupsRouter.delete('/:groupId', groupsController.deleteGroup, (req: ExpressReq, res: ExpressRes) => {
  res.status(200).json(deleteResponseMessage(TYPE, req.params.groupId));
});

module.exports = groupsRouter;
export {};