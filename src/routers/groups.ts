const express = require('express');
const groupsController = require('../controller/groups');

const groupsRouter = express.Router();

groupsRouter.post('/', groupsController.createGroup, (req: any, res: any) => {
  res.status(200).json(res.locals.group);
});

groupsRouter.get('/:user_id', groupsController.getAllUserGroups, (req: any, res: any) => {
  res.status(200).json(res.locals.groups);
});

groupsRouter.get('/:user_id/:group_id', groupsController.getOneUserGroup, (req: any, res: any) => {
  res.status(200).json(res.locals.group);
});

groupsRouter.patch('/:group_id', groupsController.updateGroup, (req: any, res: any) => {
  res.status(200).json(res.locals.group);
});

groupsRouter.delete('/:group_id', groupsController.deleteGroup, (req: any, res: any) => {
  const returnMsg: any = {
    message: `Deletion of group id ${req.params.group_id} was successful`
  }
  returnMsg.group_id = req.params.group_id;
  res.status(200).json(returnMsg);
});

module.exports = groupsRouter;
export {};