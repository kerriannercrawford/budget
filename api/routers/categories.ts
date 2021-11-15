import { CategoryController } from '../types/controller';
import { ExpressRes, ExpressReq, DeleteResponseMessage } from '../types/express';

const express = require('express');
const categoriesController: CategoryController = require('../controller/categories');
const { deleteResponseMessage } = require('../util/util');
const TYPE = 'category'

const categoriesRouter = express.Router();

categoriesRouter.post('/', categoriesController.createCategory, (req: ExpressReq, res: ExpressRes) => {
  res.status(200).json(res.locals.category);
});

categoriesRouter.get('/user/:userId', categoriesController.getAllUserCategories, (req: ExpressReq, res: ExpressRes) => {
  res.status(200).json(res.locals.categories);
});

categoriesRouter.get('/category/:categoryId', categoriesController.getOneUserCategory, (req: ExpressReq, res: ExpressRes) => {
  res.status(200).json(res.locals.category);
});

categoriesRouter.patch('/:categoryId', categoriesController.updateCategory, (req: ExpressReq, res: ExpressRes) => {
  res.status(200).json(res.locals.category);
});

categoriesRouter.delete('/:categoryId', categoriesController.deleteCategory, (req: ExpressReq, res: ExpressRes) => {
  res.status(200).json(deleteResponseMessage(TYPE, req.params.categoryId));
});

module.exports = categoriesRouter;
export {};