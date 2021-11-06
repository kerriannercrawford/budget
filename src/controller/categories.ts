const db = require('../models/database');
const queries = require('./queries/categories');

const categoriesController: any = {};

categoriesController.createCategory = async (req: any, res: any, next: any) => {
  const { user_id, group_id, name } = req.body;
  const values = [user_id, group_id, name];
  const category = await db.query(queries.createCategory, values);
  res.locals.category = category.rows;
  return next();
}

categoriesController.getAllUserCategories = async (req: any, res: any, next: any) => {
  const categories = await db.query(queries.getAllUserCategories, [req.params.category_id]);
  res.locals.categories = categories.rows;
  return next();
}

categoriesController.getOneUserCategory = async (req: any, res: any, next: any) => {
  const { user_id, category_id } = req.params;
  const category = await db.query(queries.getOneUserCategory, [user_id, category_id]);
  res.locals.category = category.rows;
  return next();
}

categoriesController.updateCategory = async (req: any, res: any, next: any) => {
  const { queryString, values } = await queries.updateCategory(req.body, req.params.category_id);
  const category = await db.query(queryString, values);
  res.locals.category = category.rows;
  return next();
}

categoriesController.deleteCategory = async (req: any, res: any, next: any) => {
  const category = await db.query(queries.deleteCategory, [req.params.category_id]);
  res.locals.category = category.rows;
  return next();
}

module.exports = categoriesController;
export {};