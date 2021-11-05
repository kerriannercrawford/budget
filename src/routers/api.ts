import express from 'express';
import { usersRouter } from './users';
import { accountsRouter } from './accounts';
import { categoriesRouter } from './categories';
import { groupsRouter } from './groups';
import { payeesRouter } from './payees';
import { transactionsRouter } from './transactions';

export const apiRouter = express.Router();

apiRouter.use('/accounts', accountsRouter);
apiRouter.use('/categories', categoriesRouter);
apiRouter.use('/groups', groupsRouter);
apiRouter.use('/payees', payeesRouter);
apiRouter.use('/transactions', transactionsRouter);
apiRouter.use('/users', usersRouter);

module.exports = apiRouter;