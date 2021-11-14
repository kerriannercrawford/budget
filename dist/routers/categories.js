"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require('express');
const categoriesController = require('../controller/categories');
const { deleteResponseMessage } = require('../util/util');
const TYPE = 'category';
const categoriesRouter = express.Router();
categoriesRouter.post('/', categoriesController.createCategory, (req, res) => {
    res.status(200).json(res.locals.category);
});
categoriesRouter.get('/user/:userId', categoriesController.getAllUserCategories, (req, res) => {
    res.status(200).json(res.locals.categories);
});
categoriesRouter.get('/category/:categoryId', categoriesController.getOneUserCategory, (req, res) => {
    res.status(200).json(res.locals.category);
});
categoriesRouter.patch('/:categoryId', categoriesController.updateCategory, (req, res) => {
    res.status(200).json(res.locals.category);
});
categoriesRouter.delete('/:categoryId', categoriesController.deleteCategory, (req, res) => {
    res.status(200).json(deleteResponseMessage(TYPE, req.params.categoryId));
});
module.exports = categoriesRouter;
//# sourceMappingURL=categories.js.map