import express from 'express';
import groupsController from '../controller/groups';

const groupsRouter = express.Router();

groupsRouter.get('/', (req, res) => {
  res.status(200).json({});
});

export default groupsRouter;