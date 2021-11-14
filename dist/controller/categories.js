"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const categories = require('../models/categoryModel');
const { checkResult } = require('../util/util');
const categoriesController = {};
categoriesController.createCategory = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { userId, groupId, categoryName, note } = req.body;
    const createdCategory = yield categories.create({
        name: {
            userId,
            categoryName
        },
        groupId,
        userId,
        note
    });
    checkResult(createdCategory, next, 'Error: Unable to create category');
    res.locals.category = createdCategory;
    return next();
});
categoriesController.getAllUserCategories = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const foundCategories = yield categories.find({ userId: req.params.userId });
    checkResult(foundCategories, next, 'Error: Unable to locate categories');
    res.locals.categories = foundCategories;
    return next();
});
categoriesController.getOneUserCategory = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const foundCategory = yield categories.find({ categoryId: req.params.categoryId });
    checkResult(foundCategory, next, 'Error: Unable to locate category');
    res.locals.category = foundCategory;
    return next();
});
categoriesController.updateCategory = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const query = { _id: req.params.categoryId };
    const updatedCategory = yield categories.findOneAndUpdate(query, req.body, { new: true });
    checkResult(updatedCategory, next, 'Error: Unable to update category');
    res.locals.category = updatedCategory;
    return next();
});
categoriesController.deleteCategory = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const deletedCategory = yield categories.findOneAndDelete({ _id: req.params.categoryId });
    checkResult(deletedCategory, next, 'Error: Unable to delete category');
    res.locals.category = deletedCategory;
    return next();
});
module.exports = categoriesController;
//# sourceMappingURL=categories.js.map