import express from 'express';
import payeesController from '../controller/payees';

const payeesRouter = express.Router();

payeesRouter.get('/', (req, res) => {
  res.status(200).json({});
});

export default payeesRouter;