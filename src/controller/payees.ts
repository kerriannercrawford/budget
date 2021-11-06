const db = require('../models/database');
const queries = require('./queries/payees');

const payeesController: any = {};

payeesController.createPayee = async (req: any, res: any, next: any) => {
  const { user_id, name } = req.body;
  const payee = await db.query(queries.createPayee, [user_id, name]);
  res.locals.payee = payee.rows;
  return next();
}

payeesController.getAllUserPayees = async (req: any, res: any, next: any) => {
  const payees = await db.query(queries.getAllUserPayees, [req.params.user_id]);
  res.locals.payees = payees.rows;
  return next();
}

payeesController.getOneUserPayee = async (req: any, res: any, next: any) => {
  const { user_id, payee_id } = req.params;
  const payee = await db.query(queries.getOneUserPayee, [user_id, payee_id]);
  res.locals.payee = payee.rows;
  return next();
}

payeesController.updatePayee = async (req: any, res: any, next: any) => {
  const { queryString, values } = await queries.updatePayee(req.body, req.params.payee_id);
  const payee = await db.query(queryString, values);
  res.locals.payee = payee.rows;
  return next();
}

payeesController.deletePayee = async (req: any, res: any, next: any) => {
  const payee = await db.query(queries.deletePayee, [req.params.payee_id]);
  res.locals.payee = payee.rows;
  return next();
}


module.exports = payeesController;
export {};