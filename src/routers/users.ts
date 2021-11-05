import express from 'express';
import { usersController } from '../controller/users';

export const usersRouter = express.Router();

// usersRouter.get('', middleware, (req, res)) => {
//   res.status(200).json()
// }

module.exports = usersRouter;