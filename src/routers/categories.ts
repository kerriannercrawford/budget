import { CategoryController } from '../../src/types/controller';
import { ExpressRes, ExpressReq, DeleteResponseMessage } from '../../src/types/express';

const express = require('express');
const categoriesController: CategoryController = require('../controller/categories');

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
  const returnMsg: DeleteResponseMessage = {
    message: `Deletion of category id ${req.params.categoryId} was successful`
  };
  returnMsg.categoryId = req.params.categoryId;
  res.status(200).json(returnMsg);
});

module.exports = categoriesRouter;
export {};