import { ExpressRes, ExpressReq } from '../../src/types/express';

const express = require('express');
const accountsRouter = require('../routers/accounts');
const categoriesRouter = require('../routers/categories');
const groupsRouter = require('../routers/groups');
const payeesRouter = require('../routers/payees');
const transactionsRouter = require('../routers/transactions');
const usersRouter = require('../routers/users');

const apiRouter = express.Router();

apiRouter.get('/', (req: ExpressReq, res: ExpressRes) => {
  res.status(400).json({body: 'Uh oh! API record not found'});
});

apiRouter.use('/accounts', accountsRouter);
apiRouter.use('/categories', categoriesRouter);
apiRouter.use('/groups', groupsRouter);
apiRouter.use('/payees', payeesRouter);
apiRouter.use('/transactions', transactionsRouter);
apiRouter.use('/users', usersRouter);

module.exports = apiRouter;
export {};