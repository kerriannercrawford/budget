import { PayeeQuery } from '../../src/types/queries';
import { PayeeController } from '../../src/types/controller';
import { ExpressRes, ExpressReq, ExpressNext } from '../../src/types/express';

const db = require('../models/database');
const queries: PayeeQuery = require('./queries/payees');

const payeesController: PayeeController = {};

payeesController.createPayee = async (req: ExpressReq, res: ExpressRes, next: ExpressNext) => {

  return next();
};

payeesController.getAllUserPayees = async (req: ExpressReq, res: ExpressRes, next: ExpressNext) => {

  return next();
};

payeesController.getOneUserPayee = async (req: ExpressReq, res: ExpressRes, next: ExpressNext) => {

  return next();
};

payeesController.updatePayee = async (req: ExpressReq, res: ExpressRes, next: ExpressNext) => {

  return next();
};

payeesController.deletePayee = async (req: ExpressReq, res: ExpressRes, next: ExpressNext) => {

  return next();
};

payeesController.getPayeeNameById = async (req: ExpressReq, res: ExpressRes, next: ExpressNext) => {

  return next();
}

module.exports = payeesController;
export {};