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
const queries = {};
queries.createCategory = `
INSERT INTO categories (user_id, group_id, name)
VALUES ($1, $2, $3)
RETURNING _id, user_id, group_id, name`;
queries.getAllUserCategories = `
SELECT * FROM categories
WHERE user_id=$1`;
queries.getOneUserCategory = `
SELECT * FROM categories
WHERE user_id=$1 AND _id=$2`;
queries.deleteCategory = 'DELETE FROM categories WHERE _id=$1 RETURNING _id';
queries.updateCategory = (body, categoryId) => __awaiter(void 0, void 0, void 0, function* () {
    const keys = Object.keys(body);
    const values = [categoryId];
    let queryString = `
  UPDATE categories
  SET `;
    const returnString = ' WHERE _id = $1 RETURNING _id, user_id, group_id, name';
    for (let i = 0; i < keys.length; i += 1) {
        const currentChunk = `${keys[i]} = $${i + 2}`;
        queryString = queryString + currentChunk;
        if (i + 1 < keys.length) {
            queryString = queryString + ', ';
        }
        values.push(body[keys[i]]);
    }
    queryString = queryString + returnString;
    return {
        queryString,
        values
    };
});
module.exports = queries;
//# sourceMappingURL=categories.js.map