import { CategoryQuery } from '../../src/types/queries';
import { CategoryController } from '../../src/types/controller';
import { ExpressRes, ExpressReq, ExpressNext } from '../../src/types/express';

const categories = require('../models/categoryModel');
const queries: CategoryQuery = require('./queries/categories');

const categoriesController: CategoryController = {};

categoriesController.createCategory = async (req: ExpressReq, res: ExpressRes, next: ExpressNext) => {

  return next();
};

categoriesController.getAllUserCategories = async (req: ExpressReq, res: ExpressRes, next: ExpressNext) => {

  return next();
};

categoriesController.getOneUserCategory = async (req: ExpressReq, res: ExpressRes, next: ExpressNext) => {

  return next();
};

categoriesController.updateCategory = async (req: ExpressReq, res: ExpressRes, next: ExpressNext) => {

  return next();
};

categoriesController.deleteCategory = async (req: ExpressReq, res: ExpressRes, next: ExpressNext) => {

  return next();
};

categoriesController.getCategoryNameById = async (req: ExpressReq, res: ExpressRes, next: ExpressNext) => {

  return next();
}

module.exports = categoriesController;
export {};