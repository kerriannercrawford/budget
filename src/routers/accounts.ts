import express from 'express';
import accountsController from '../controller/accounts';

const accountsRouter = express.Router();

accountsRouter.post('/', (req, res) => {
  res.status(200).json({})
})

accountsRouter.get('/:user_id', (req, res) => {
  res.status(200).json({});
});

accountsRouter.get('/:user_id/:account_id', (req, res) => {
  res.status(200).json({});
});

accountsRouter.patch('/:account_id', (req, res) => {
  res.status(200).json({})
});

accountsRouter.delete('/:account_id', (req, res) => {
  res.status(200).json({})
})

export default accountsRouter;