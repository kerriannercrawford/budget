import { GroupQuery, RequestBody } from '../../../src/types/queries';

const queries: GroupQuery = {};

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

queries.updateGroup = async (body: RequestBody, groupId: string) => {
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
};

queries.getGroupNameById = `
SELECT name FROM groups
WHERE _id=$1`;

module.exports = queries;

export {};