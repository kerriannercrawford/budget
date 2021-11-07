import { GroupController } from '../../src/types/controller';
import { ExpressRes, ExpressReq, DeleteResponseMessage } from '../../src/types/express';

const express = require('express');
const groupsController: GroupController = require('../controller/groups');

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
  const returnMsg: DeleteResponseMessage = {
    message: `Deletion of group id ${req.params.groupId} was successful`
  };
  returnMsg.groupId = req.params.groupId;
  res.status(200).json(returnMsg);
});

module.exports = groupsRouter;
export {};