import { PayeeController } from '../../src/types/controller';
import { ExpressRes, ExpressReq, ExpressNext } from '../../src/types/express';

const payees = require('../models/payeeModel');
const { checkResult } = require('../util/util');

const payeesController: PayeeController = {};

payeesController.createPayee = async (req: ExpressReq, res: ExpressRes, next: ExpressNext) => {
  const { payeeName, userId } = req.body;
  const createdPayee = await payees.create({
    name: { payeeName, userId }, 
    userId 
  })
  checkResult(createdPayee, next, 'Error: Unable to create payee');
  res.locals.payee = createdPayee;
  return next();
};

payeesController.getAllUserPayees = async (req: ExpressReq, res: ExpressRes, next: ExpressNext) => {
  const returnedPayees = await payees.find({ userId: req.params.userId });
  checkResult(returnedPayees, next, 'Error: Unable to load payees')
  res.locals.payees = returnedPayees;
  return next();
};

payeesController.getOneUserPayee = async (req: ExpressReq, res: ExpressRes, next: ExpressNext) => {
  const returnedPayee = await payees.findById(req.params.payeeId);
  checkResult(returnedPayee, next, 'Error: Unable to locate payee');
  res.locals.payee = returnedPayee;
  return next();
};

payeesController.updatePayee = async (req: ExpressReq, res: ExpressRes, next: ExpressNext) => {
  const query = { _id: req.params.payeeId };
  const updatedPayee = await payees.findOneAndUpdate(query, req.body, { new: true });
  checkResult(updatedPayee, next, 'Error: Unable to update payee');
  res.locals.payee = updatedPayee;
  return next();
};

payeesController.deletePayee = async (req: ExpressReq, res: ExpressRes, next: ExpressNext) => {
  const deletedPayee = await payees.findOneAndDelete({ _id: req.params.payeeId });
  checkResult(deletedPayee, next, 'Error: Unable to delete payee');
  res.locals.payee = deletedPayee;
  return next();
};

module.exports = payeesController;
export {};