import express from 'express';
import groupsController from '../controller/groups';

const groupsRouter = express.Router();

groupsRouter.post('/', (req, res) => {
  res.status(200).json({});
})

groupsRouter.get('/:user_id', (req, res) => {
  res.status(200).json({});
});

groupsRouter.get('/:user_id/:group_id', (req, res) => {
  res.status(200).json({});
})

groupsRouter.patch('/:group_id', (req, res) => {
  res.status(200).json({});
})

groupsRouter.delete('/:user_id/:group_id', (req, res) => {
  res.status(200).json({});
})

export default groupsRouter;