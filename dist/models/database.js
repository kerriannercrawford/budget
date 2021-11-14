require('dotenv').config();
const { Pool } = require('pg');
const pool = new Pool({
    connectionString: process.env.PG_URI
});
// TO DO: FIX ANY
module.exports = {
    query: (text, params, callback) => {
        return pool.query(text, params, callback);
    }
};
//# sourceMappingURL=database.js.map