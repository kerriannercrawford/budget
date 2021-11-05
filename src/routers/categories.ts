import express from 'express';
import categoriesController from '../controller/categories';

const categoriesRouter = express.Router();

categoriesRouter.get('/', (req, res) => {
  res.status(200).json({});
});

export default categoriesRouter;