import { PayeeQuery } from '../../src/types/queries';
import { PayeeController } from '../../src/types/controller';
import { ExpressRes, ExpressReq, ExpressNext } from '../../src/types/express';

const db = require('../models/database');
const queries: PayeeQuery = require('./queries/payees');

const payeesController: PayeeController = {};

payeesController.createPayee = async (req: ExpressReq, res: ExpressRes, next: ExpressNext) => {
  const { user_id, name } = req.body;
  const payee = await db.query(queries.createPayee, [user_id, name]);
  res.locals.payee = payee.rows;

  return next();
};

payeesController.getAllUserPayees = async (req: ExpressReq, res: ExpressRes, next: ExpressNext) => {
  const payees = await db.query(queries.getAllUserPayees, [req.params.user_id]);
  res.locals.payees = payees.rows;

  return next();
};

payeesController.getOneUserPayee = async (req: ExpressReq, res: ExpressRes, next: ExpressNext) => {
  const { user_id, payee_id } = req.params;
  const payee = await db.query(queries.getOneUserPayee, [user_id, payee_id]);
  res.locals.payee = payee.rows;

  return next();
};

payeesController.updatePayee = async (req: ExpressReq, res: ExpressRes, next: ExpressNext) => {
  const { queryString, values } = await queries.updatePayee(req.body, req.params.payee_id);
  const payee = await db.query(queryString, values);
  res.locals.payee = payee.rows;

  return next();
};

payeesController.deletePayee = async (req: ExpressReq, res: ExpressRes, next: ExpressNext) => {
  const payee = await db.query(queries.deletePayee, [req.params.payee_id]);
  res.locals.payee = payee.rows;

  return next();
};

payeesController.getPayeeNameById = async (req: ExpressReq, res: ExpressRes, next: ExpressNext) => {
  const name = await db.query(queries.getPayeeNameById, [req.params.payee_id]);
  res.locals.name = name.rows;
  return next();
}

module.exports = payeesController;
export {};