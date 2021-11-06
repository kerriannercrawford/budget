const utils = require('../../util/util')

const queries: any = {};

queries.createAccount = `
INSERT INTO accounts (user_id, name, active, clearedBalance, unclearedBalance)
VALUES ($1, $2, $3, $4, $5)`

module.exports = queries;
export {};