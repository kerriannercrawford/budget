import { PayeeQuery, RequestBody } from '../../../src/types/queries';

const queries: PayeeQuery = {};

queries.createPayee = `
INSERT INTO payees (user_id, name)
VALUES ($1, $2)
RETURNING _id, user_id, name`;

queries.getAllUserPayees = `
SELECT * FROM payees
WHERE user_id=$1`;

queries.getOneUserPayee = `
SELECT * FROM payees
WHERE user_id=$1 AND _id=$2`;

queries.deletePayee = 'DELETE FROM payees WHERE _id=$1 RETURNING _id';

queries.updatePayee = async (body: RequestBody, payeeId: string) => {
  const keys = Object.keys(body);
  const values = [payeeId];

  let queryString = `
  UPDATE payees
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
};


module.exports = queries;
export {};