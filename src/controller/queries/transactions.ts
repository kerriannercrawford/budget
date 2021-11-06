const queries: any = {};

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

queries.updateTransaction = async (body: any, transaction_id: string) => {
  const keys = Object.keys(body);
  const values = [transaction_id];

  let queryString = `
  UPDATE transactions
  SET `;

  let returnString = ' WHERE _id = $1 RETURNING _id, user_id, account_id, date, payee_id, category_id, memo, outflow, inflow, cleared';

  for (let i = 0; i < keys.length; i += 1) {
    const currentChunk = `${keys[i]} = $${i + 2}`;
    queryString = queryString + currentChunk;
    if (i + 1 < keys.length) {
      queryString = queryString + ', '
    }
    values.push(body[keys[i]]);
  };

  queryString = queryString + returnString;

  return {
    queryString, 
    values
  }
}

module.exports = queries;
export {};