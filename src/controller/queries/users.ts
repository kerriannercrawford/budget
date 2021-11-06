const utils = require('../../util/util')

const queries: any = {};

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

queries.updateUser = async (body: any, userId: string) => {
  const keys = Object.keys(body);
  const values = [userId];

  let queryString = `
  UPDATE users
  SET `;

  let returnString = ' WHERE _id = $1 RETURNING _id, username, password, email, firstName, lastName';

  for (let i = 0; i < keys.length; i += 1) {
    const currentChunk = `${keys[i]} = $${i + 2}`;
    queryString = queryString + currentChunk;
    if (i + 1 < keys.length) {
      queryString = queryString + ', '
    }

    if (keys[i] === 'password') {
      const hash = await utils.encryptPassword(body[keys[i]]);
      values.push(hash)
    } else {
      values.push(body[keys[i]])
    }
  };

  queryString = queryString + returnString;

  return {
    queryString, 
    values
  }
};

queries.deleteUser = 'DELETE FROM users WHERE _id=$1 RETURNING _id';

module.exports = queries;