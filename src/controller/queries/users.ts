const queries: any = {};

queries.createUser = `
INSERT INTO users (username, password, email, firstName, lastName)
VALUES ($1, $2, $3, $4, $5)
RETURNING _id, username, password, email, firstName, lastName`;

queries.login = `
SELECT * FROM users
WHERE username=$1
`

module.exports = queries;