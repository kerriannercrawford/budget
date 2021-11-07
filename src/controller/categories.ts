import { CategoryController } from '../../src/types/controller';
import { ExpressRes, ExpressReq, ExpressNext } from '../../src/types/express';

const categories = require('../models/categoryModel');
const { checkResult } = require('../util/util');

const categoriesController: CategoryController = {};

categoriesController.createCategory = async (req: ExpressReq, res: ExpressRes, next: ExpressNext) => {
  const { userId, groupId, categoryName } = req.body;
  const createdCategory = await categories.create({
    name: {
      userId,
      categoryName
    },
    groupId,
    userId
  });
  checkResult(createdCategory, next, 'Error: Unable to create category')
  res.locals.category = createdCategory;
  return next();
};

categoriesController.getAllUserCategories = async (req: ExpressReq, res: ExpressRes, next: ExpressNext) => {
  const foundCategories = await categories.find({ userId: req.params.userId });
  checkResult(foundCategories, next, 'Error: Unable to locate categories');
  res.locals.categories = foundCategories;
  return next();
};

categoriesController.getOneUserCategory = async (req: ExpressReq, res: ExpressRes, next: ExpressNext) => {
  const foundCategory = await categories.find({ categoryId: req.params.categoryId });
  checkResult(foundCategory, next, 'Error: Unable to locate category');
  res.locals.category = foundCategory;
  return next();
};

categoriesController.updateCategory = async (req: ExpressReq, res: ExpressRes, next: ExpressNext) => {
  const query = { _id: req.params.categoryId };
  const updatedCategory = await categories.findOneAndUpdate(
    query, 
    req.body,
    { new: true }
  );
  checkResult(updatedCategory, next, 'Error: Unable to update category');
  res.locals.category = updatedCategory;
  return next();
};

categoriesController.deleteCategory = async (req: ExpressReq, res: ExpressRes, next: ExpressNext) => {
  const deletedCategory = await categories.findOneAndDelete({ _id: req.params.categoryId });
  checkResult(deletedCategory, next, 'Error: Unable to delete category');
  res.locals.category = deletedCategory;
  return next();
};

module.exports = categoriesController;
export {};