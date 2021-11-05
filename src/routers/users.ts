import express from 'express';
import usersController from '../controller/users';

const usersRouter = express.Router();


usersRouter.get('/', (req, res) => {
  res.status(200).json({});
});

usersRouter.get('/:user_id', (req, res) => {
  res.status(200).json({});
})

usersRouter.post('/login', (req, res) => {
  res.status(200).json({});
})

usersRouter.post('/create', (req, res) => {
  res.status(200).json({});
})

usersRouter.patch('/:user_id', (req, res) => {
  res.status(200).json({});
})

usersRouter.delete('/:user_id', (req, res) => {
  res.status(200).json({});
})

export default usersRouter;