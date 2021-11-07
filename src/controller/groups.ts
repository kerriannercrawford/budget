import { GroupController } from '../../src/types/controller';
import { ExpressRes, ExpressReq, ExpressNext } from '../../src/types/express';

const groups = require('../models/groupsModel');
const { checkResult } = require('../util/util');

const groupsController: GroupController = {};

groupsController.createGroup = async (req: ExpressReq, res: ExpressRes, next: ExpressNext) => {
  const { groupName, userId } = req.body;
  const createdGroup = await groups.create({
    name: {
      userId,
      groupName
    },
    userId
  })
  checkResult(createdGroup, next, 'Error: unable to create group');
  res.locals.group = createdGroup;
  return next();
};

groupsController.getAllUserGroups = async (req: ExpressReq, res: ExpressRes, next: ExpressNext) => {
  const foundGroups = await groups.find({ userId: req.params.userId });
  checkResult(foundGroups, next, 'Error: Unable to locate groups')
  res.locals.groups = foundGroups;
  return next();
};

groupsController.getOneUserGroup = async (req: ExpressReq, res: ExpressRes, next: ExpressNext) => {
  const foundGroup = await groups.find({ _id: req.params.groupId });
  checkResult(foundGroup, next, 'Error: Unable to locate group with that id');
  res.locals.group = foundGroup;
  return next();
};

groupsController.updateGroup = async (req: ExpressReq, res: ExpressRes, next: ExpressNext) => {
  const query = { _id: req.params.groupId };
  const updatedGroup = await groups.findOneAndUpdate(query, req.body, { new: true });
  checkResult(updatedGroup, next, 'Error: Unable to update group');
  res.locals.group = updatedGroup;
  return next();
};

groupsController.deleteGroup = async (req: ExpressReq, res: ExpressRes, next: ExpressNext) => {
  const deletedGroup = await groups.findOneAndDelete({ _id: req.params.groupId });
  checkResult(deletedGroup, next, 'Error: Unable to delete group');
  res.locals.group = deletedGroup;
  return next();
};


module.exports = groupsController;
export {};