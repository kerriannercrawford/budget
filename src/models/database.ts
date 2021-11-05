import { Pool } from 'pg';
import dotenv from 'dotenv';

dotenv.config();

const pool = new Pool({
  connectionString: process.env.PG_URI
});

// TO DO: FIX ANY
module.exports = {
  query: (text: string, params: string[], callback: any) => {
    return pool.query(text, params, callback);
  }
};