import express from 'express';
import usersController from '../controller/users';

const usersRouter = express.Router();

usersRouter.get('/', (req, res) => {
  res.status(200).json({});
});

export default usersRouter;