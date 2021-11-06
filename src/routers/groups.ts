import { ExpressRes, ExpressReq, DeleteResponseMessage } from '../../src/types/express';

const express = require('express');
const groupsController = require('../controller/groups');

const groupsRouter = express.Router();

groupsRouter.post('/', groupsController.createGroup, (req: ExpressReq, res: ExpressRes) => {
  res.status(200).json(res.locals.group);
});

groupsRouter.get('/:user_id', groupsController.getAllUserGroups, (req: ExpressReq, res: ExpressRes) => {
  res.status(200).json(res.locals.groups);
});

groupsRouter.get('/:user_id/:group_id', groupsController.getOneUserGroup, (req: ExpressReq, res: ExpressRes) => {
  res.status(200).json(res.locals.group);
});

groupsRouter.patch('/:group_id', groupsController.updateGroup, (req: ExpressReq, res: ExpressRes) => {
  res.status(200).json(res.locals.group);
});

groupsRouter.delete('/:group_id', groupsController.deleteGroup, (req: ExpressReq, res: ExpressRes) => {
  const returnMsg: DeleteResponseMessage = {
    message: `Deletion of group id ${req.params.group_id} was successful`
  };
  returnMsg.group_id = req.params.group_id;
  res.status(200).json(returnMsg);
});

module.exports = groupsRouter;
export {};