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

module.exports = queries;