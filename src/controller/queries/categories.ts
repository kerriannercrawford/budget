const queries: any = {};

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

queries.updateCategory = async (body: any, category_id: string) => {
  const keys = Object.keys(body);
  const values = [category_id];

  let queryString = `
  UPDATE categories
  SET `;

  let returnString = ' WHERE _id = $1 RETURNING _id, user_id, group_id, name';

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
export {}