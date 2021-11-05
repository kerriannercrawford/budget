require('dotenv').confg()
const { Pool } = require('pg');

const pool = new Pool({
  connectionString: process.env.PG_URI
})

// TO DO: FIX ANY
module.exports = {
  query: (text: string, params: Array<string>, callback: any) => {
    return pool.query(text, params, callback)
  }
}