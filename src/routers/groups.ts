import express from 'express';
import { groupsController } from '../controller/groups';

export const groupsRouter = express.Router();

// groupsRouter.get('', middleware, (req, res)) => {
//   res.status(200).json()
// }

module.exports = groupsRouter;