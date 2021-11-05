const express = require('express');
const categoriesController = require('../controller/categories');

const categoriesRouter = express.Router();

categoriesRouter.post('/', (req: any, res: any) => {
  res.status(200).json({});
});

categoriesRouter.get('/:user_id', (req: any, res: any) => {
  res.status(200).json({});
});

categoriesRouter.get('/:user_id/:category_id', (req: any, res: any) => {
  res.status(200).json({});
});

categoriesRouter.patch('/:category_id', (req: any, res: any) => {
  res.status(200).json({});
});

categoriesRouter.delete('/:user_id/:category_id', (req: any, res: any) => {
  res.status(200).json({});
});

module.exports = categoriesRouter;
export {};