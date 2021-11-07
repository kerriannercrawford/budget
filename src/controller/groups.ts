import { GroupQuery } from '../../src/types/queries';
import { GroupController } from '../../src/types/controller';
import { ExpressRes, ExpressReq, ExpressNext } from '../../src/types/express';

const db = require('../models/database');
const queries: GroupQuery = require('./queries/groups');

const groupsController: GroupController = {};

groupsController.createGroup = async (req: ExpressReq, res: ExpressRes, next: ExpressNext) => {

  return next();
};

groupsController.getAllUserGroups = async (req: ExpressReq, res: ExpressRes, next: ExpressNext) => {

  return next();
};

groupsController.getOneUserGroup = async (req: ExpressReq, res: ExpressRes, next: ExpressNext) => {

  return next();
};

groupsController.updateGroup = async (req: ExpressReq, res: ExpressRes, next: ExpressNext) => {

  return next();
};

groupsController.deleteGroup = async (req: ExpressReq, res: ExpressRes, next: ExpressNext) => {

  return next();
};

groupsController.getGroupNameById = async (req: ExpressReq, res: ExpressRes, next: ExpressNext) => {

  return next();
}


module.exports = groupsController;
export {};