const express = require('express');
const categoriesController = require('../controller/categories');

const categoriesRouter = express.Router();

categoriesRouter.post('/', categoriesController.createCategory, (req: any, res: any) => {
  res.status(200).json(res.locals.category);
});

categoriesRouter.get('/:user_id', categoriesController.getAllUserCategories, (req: any, res: any) => {
  res.status(200).json(res.locals.categories);
});

categoriesRouter.get('/:user_id/:category_id', categoriesController.getOneUserCategory, (req: any, res: any) => {
  res.status(200).json(res.locals.category);
});

categoriesRouter.patch('/:category_id', categoriesController.updateCategory, (req: any, res: any) => {
  res.status(200).json(res.locals.category);
});

categoriesRouter.delete('/:user_id/:category_id', categoriesController.deleteCategory, (req: any, res: any) => {
  const returnMsg: any = {
    message: `Deletion of category id ${req.params.category_id} was successful`
  }
  returnMsg.category_id = req.params.category_id;
  res.status(200).json(returnMsg);
});

module.exports = categoriesRouter;
export {};