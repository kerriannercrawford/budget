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
queries.createTransaction = `
INSERT INTO transactions (user_id, account_id, date, payee_id, category_id, memo, outflow, inflow, cleared)
VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)
RETURNING _id, user_id, account_id, date, payee_id, category_id, memo, outflow, inflow, cleared`;
queries.getAllUserTransactions = `
SELECT * FROM transactions
WHERE user_id=$1`;
queries.getOneUserTransaction = `
SELECT * FROM transactions
WHERE user_id=$1 AND _id=$2`;
queries.getAllAccountTransactions = `
SELECT * FROM transactions
WHERE account_id=$1`;
queries.deleteTransaction = 'DELETE FROM transactions WHERE _id=$1 RETURNING _id';
queries.updateTransaction = (body, transactionId) => __awaiter(void 0, void 0, void 0, function* () {
    const keys = Object.keys(body);
    const values = [transactionId];
    let queryString = `
  UPDATE transactions
  SET `;
    const returnString = ' WHERE _id = $1 RETURNING _id, user_id, account_id, date, payee_id, category_id, memo, outflow, inflow, cleared';
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
//# sourceMappingURL=transactions.js.map