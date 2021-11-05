import express from 'express';
import categoriesController from '../controller/categories';

const categoriesRouter = express.Router();

categoriesRouter.post('/', (req, res) => {
  res.status(200).json({});
})

categoriesRouter.get('/:user_id', (req, res) => {
  res.status(200).json({});
});

categoriesRouter.get('/:user_id/:category_id', (req, res) => {
  res.status(200).json({});
})

categoriesRouter.patch('/:category_id', (req, res) => {
  res.status(200).json({});
})

categoriesRouter.delete('/:user_id/:category_id', (req, res) => {
  res.status(200).json({});
})

export default categoriesRouter;