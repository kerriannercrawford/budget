const queries: any = {};

queries.createAccount = `
INSERT INTO accounts (user_id, name, active, clearedBalance, unclearedBalance)
VALUES ($1, $2, $3, $4, $5)
RETURNING _id, user_id, name, active, clearedBalance, unclearedBalance`

queries.getAllUsersAccounts = `
SELECT * FROM accounts
WHERE user_id=$1`;

queries.getOneUserAccount = `
SELECT * FROM accounts
WHERE user_id=$1 AND _id=$2`;

queries.deleteUserAccount = 'DELETE FROM accounts WHERE _id=$1 RETURNING _id';

queries.updateAccount = async (body: any, account_id: string) => {
  const keys = Object.keys(body);
  const values = [account_id];

  let queryString = `
  UPDATE accounts
  SET `;

  let returnString = ' WHERE _id = $1 RETURNING _id, user_id, name, active, clearedBalance, unclearedBalance';

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
};

module.exports = queries;
export {};