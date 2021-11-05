import express from 'express';
import payeesController from '../controller/payees';

const payeesRouter = express.Router();

payeesRouter.post('/', (req, res) => {
  res.status(200).json({});
})

payeesRouter.get('/:user_id', (req, res) => {
  res.status(200).json({});
});

payeesRouter.get('/:user_id/:payee_id', (req, res) => {
  res.status(200).json({});
})

payeesRouter.patch('/:payee_id', (req, res) => {
  res.status(200).json({});
})

payeesRouter.delete('/:user_id/:payee_id', (req, res) => {
  res.status(200).json({});
})

export default payeesRouter;