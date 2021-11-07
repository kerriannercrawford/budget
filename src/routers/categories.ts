import { CategoryController } from '../../src/types/controller';
import { ExpressRes, ExpressReq, DeleteResponseMessage } from '../../src/types/express';

const express = require('express');
const categoriesController: CategoryController = require('../controller/categories');

const categoriesRouter = express.Router();

categoriesRouter.post('/', categoriesController.createCategory, (req: ExpressReq, res: ExpressRes) => {
  res.status(200).json(res.locals.category);
});

categoriesRouter.get('/:user_id', categoriesController.getAllUserCategories, (req: ExpressReq, res: ExpressRes) => {
  res.status(200).json(res.locals.categories);
});

categoriesRouter.get('/:user_id/:category_id', categoriesController.getOneUserCategory, (req: ExpressReq, res: ExpressRes) => {
  res.status(200).json(res.locals.category);
});

categoriesRouter.get('/name/:category_id', categoriesController.getCategoryNameById, (req: ExpressReq, res: ExpressRes) => {
  res.status(200).json(res.locals.name);
})

categoriesRouter.patch('/:category_id', categoriesController.updateCategory, (req: ExpressReq, res: ExpressRes) => {
  res.status(200).json(res.locals.category);
});

categoriesRouter.delete('/:user_id/:category_id', categoriesController.deleteCategory, (req: ExpressReq, res: ExpressRes) => {
  const returnMsg: DeleteResponseMessage = {
    message: `Deletion of category id ${req.params.category_id} was successful`
  };
  returnMsg.category_id = req.params.category_id;
  res.status(200).json(returnMsg);
});

module.exports = categoriesRouter;
export {};