import express from 'express';
import { categoriesController } from '../controller/categories';

export const categoriesRouter = express.Router();

// categoriesRouter.get('', middleware, (req, res)) => {
//   res.status(200).json()
// }

module.exports = categoriesRouter;