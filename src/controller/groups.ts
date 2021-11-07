import { GroupQuery } from '../../src/types/queries';
import { GroupController } from '../../src/types/controller';
import { ExpressRes, ExpressReq, ExpressNext } from '../../src/types/express';

const groups = require('../models/groupsModel');

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
  if (!createdGroup) {
    return next({
      log: 'Error: Unable to create group',
      message: {
        err: 'Error: Unable to create group'
      }
    })
  }
  res.locals.group = createdGroup;
  return next();
};

groupsController.getAllUserGroups = async (req: ExpressReq, res: ExpressRes, next: ExpressNext) => {
  const foundGroups = await groups.find({ userId: req.params.userId });
  if (!foundGroups) {
    return next({
      log: 'Error: Unable to locate groups',
      message: {
        err: 'Error: Unable to locate groups'
      }
    })
  }
  res.locals.groups = foundGroups;
  return next();
};

groupsController.getOneUserGroup = async (req: ExpressReq, res: ExpressRes, next: ExpressNext) => {
  const foundGroup = await groups.find({ _id: req.params.groupId })
  if (!foundGroup) {
    return next({
      log: 'Error: Unable to locate group with that id',
      message: {
        err: 'Error: Unable to locate group with that id'
      }
    })
  }
  res.locals.group = foundGroup;
  return next();
};

groupsController.updateGroup = async (req: ExpressReq, res: ExpressRes, next: ExpressNext) => {
  const query = { _id: req.params.groupId };
  const { groupName, userId } = req.body;
  const updatedGroup = await groups.findOneAndUpdate(
    query, 
    {
      name: {
        userId,
        groupName
      },
      userId
    }, 
    { 
      new: true 
    });
  if (!updatedGroup) {
    return next({
      log: 'Error: Unable to update group',
      message: {
        err: 'Error: Unable to update group'
      }
    })
  }
  res.locals.group = updatedGroup;
  return next();
};

groupsController.deleteGroup = async (req: ExpressReq, res: ExpressRes, next: ExpressNext) => {
  const deletedGroup = await groups.findOneAndDelete({ _id: req.params.groupId })
  if (!deletedGroup) {
    return next({
      log: 'Error: Unable to delete group',
      message: {
        err: 'Error: Unable to delete group'
      }
    })
  }
  res.locals.group = deletedGroup;
  return next();
};


module.exports = groupsController;
export {};