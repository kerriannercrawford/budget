import { GroupController } from '../../src/types/controller';
import { ExpressRes, ExpressReq, ExpressNext } from '../../src/types/express';

const db = require('../models/database');
const queries = require('./queries/groups');

const groupsController: GroupController = {};

groupsController.createGroup = async (req: ExpressReq, res: ExpressRes, next: ExpressNext) => {
  const { user_id, name } = req.body;
  const values = [user_id, name];
  const group = await db.query(queries.createGroup, values);
  res.locals.group = group.rows;

  return next();
};

groupsController.getAllUserGroups = async (req: ExpressReq, res: ExpressRes, next: ExpressNext) => {
  const groups = await db.query(queries.getAllUserGroups, [req.params.user_id]);
  res.locals.groups = groups.rows;

  return next();
};

groupsController.getOneUserGroup = async (req: ExpressReq, res: ExpressRes, next: ExpressNext) => {
  const { user_id, group_id } = req.params;
  const group = await db.query(queries.getOneUserGroup, [user_id, group_id]);
  res.locals.group = group.rows;

  return next();
};

groupsController.updateGroup = async (req: ExpressReq, res: ExpressRes, next: ExpressNext) => {
  const { queryString, values } = await queries.updateGroup(req.body, req.params.group_id);
  const group = await db.query(queryString, values);
  res.locals.group = group.rows;

  return next();
};

groupsController.deleteGroup = async (req: ExpressReq, res: ExpressRes, next: ExpressNext) => {
  const group = await db.query(queries.deleteGroup, [req.params.group_id]);
  res.locals.group = group.rows;

  return next();
};


module.exports = groupsController;
export {};