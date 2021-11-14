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
const utils = require('../../util/util');
const queries = {};
queries.createUser = `
INSERT INTO users (username, password, email, firstName, lastName)
VALUES ($1, $2, $3, $4, $5)
RETURNING _id, username, password, email, firstName, lastName`;
queries.login = `
SELECT * FROM users
WHERE username=$1`;
queries.getAllUsers = 'SELECT * FROM users';
queries.getUserById = `
SELECT * FROM users
WHERE _id=$1`;
queries.updateUser = (body, userId) => __awaiter(void 0, void 0, void 0, function* () {
    const keys = Object.keys(body);
    const values = [userId];
    let queryString = `
  UPDATE users
  SET `;
    const returnString = ' WHERE _id = $1 RETURNING _id, username, password, email, firstName, lastName';
    for (let i = 0; i < keys.length; i += 1) {
        const currentChunk = `${keys[i]} = $${i + 2}`;
        queryString = queryString + currentChunk;
        if (i + 1 < keys.length) {
            queryString = queryString + ', ';
        }
        if (keys[i] === 'password') {
            const hash = yield utils.encryptPassword(body[keys[i]]);
            values.push(hash);
        }
        else {
            values.push(body[keys[i]]);
        }
    }
    queryString = queryString + returnString;
    return {
        queryString,
        values
    };
});
queries.deleteUser = 'DELETE FROM users WHERE _id=$1 RETURNING _id';
module.exports = queries;
//# sourceMappingURL=users.js.map