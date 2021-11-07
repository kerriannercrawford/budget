import { CategoryController } from '../../src/types/controller';
import { ExpressRes, ExpressReq, ExpressNext } from '../../src/types/express';

const categories = require('../models/categoryModel');

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
  if (!createdCategory) {
    return next({
      log: 'Error: Unable to create category',
      message: {
        err: 'Error: Unable to create category'
      }
    })
  }
  res.locals.category = createdCategory;
  return next();
};

categoriesController.getAllUserCategories = async (req: ExpressReq, res: ExpressRes, next: ExpressNext) => {
  const foundCategories = await categories.find({ userId: req.params.userId });
  if (!foundCategories) {
    return next({
      log: 'Error: Unable to locate categories',
      message: {
        err: 'Error: Unable to locate categories'
      }
    })
  }
  res.locals.categories = foundCategories;
  return next();
};

categoriesController.getOneUserCategory = async (req: ExpressReq, res: ExpressRes, next: ExpressNext) => {
  const foundCategory = await categories.find({ categoryId: req.params.categoryId });
  if (!foundCategory) {
    return next({
      log: 'Error: Unable to locate category',
      message: {
        err: 'Error: Unable to locate category'
      }
    })
  }
  res.locals.category = foundCategory;
  return next();
};

categoriesController.updateCategory = async (req: ExpressReq, res: ExpressRes, next: ExpressNext) => {
  const query = { _id: req.params.categoryId };
  const updateBody: any = {};
  if (req.body.groupId) {
    updateBody.groupId = req.body.groupId;
  }
  if (req.body.categoryName && req.body.userId) {
    updateBody.name = {
      categoryName: req.body.categoryName,
      userId: req.body.userId
    };
    updateBody.userId = req.body.userId;
  }
  const updatedCategory = await categories.findOneAndUpdate(
    query, 
    updateBody,
    { new: true }
  );
  if (!updatedCategory) {
    return next({
      log: 'Error: Unable to update category',
      message: {
        err: 'Error: Unable to update category'
      }
    })
  }
  res.locals.category = updatedCategory;
  return next();
};

categoriesController.deleteCategory = async (req: ExpressReq, res: ExpressRes, next: ExpressNext) => {
  const deletedCategory = await categories.findOneAndDelete({ _id: req.params.categoryId });
  if (!deletedCategory) {
    return next({
      log: 'Error: Unable to delete category',
      message: {
        err: 'Error: Unable to delete category'
      }
    })
  }
  res.locals.category = deletedCategory;
  return next();
};

module.exports = categoriesController;
export {};