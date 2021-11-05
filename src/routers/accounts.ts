import express from 'express';
import accountsController from '../controller/accounts';

const accountsRouter = express.Router();

accountsRouter.get('/', (req, res) => {
  res.status(200).json({});
});

export default accountsRouter;