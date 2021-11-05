const express = require('express');
const apiRouter = require('./routers/api');
require('dotenv').config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api', apiRouter);

app.get('/', (req: any, res: any) => {
  res.status(200).json({});
});

app.use('*', (req: any, res: any) => {
  res.status(404).json({});
});

module.exports = app;
export {};