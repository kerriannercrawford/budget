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
queries.createGroup = `
INSERT INTO groups (user_id, name)
VALUES ($1, $2)
RETURNING _id, user_id, name`;
queries.getAllUserGroups = `
SELECT * FROM groups
WHERE user_id=$1`;
queries.getOneUserGroup = `
SELECT * FROM groups
WHERE user_id=$1 AND _id=$2`;
queries.deleteGroup = 'DELETE FROM groups WHERE _id=$1 RETURNING _id';
queries.updateGroup = (body, groupId) => __awaiter(void 0, void 0, void 0, function* () {
    const keys = Object.keys(body);
    const values = [groupId];
    let queryString = `
  UPDATE groups
  SET `;
    const returnString = ' WHERE _id = $1 RETURNING _id, user_id, name';
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
queries.getGroupNameById = `
SELECT name FROM groups
WHERE _id=$1`;
module.exports = queries;
//# sourceMappingURL=groups.js.map