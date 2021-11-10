import { ExpressRes, ExpressReq, ExpressNext } from '../src/types/express';

const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const apiRouter = require('./routers/api');
require('dotenv').config();

const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));

app.use('/api', apiRouter);
app.use('/public', express.static(path.join(__dirname, '../src/public')));

app.get('/', (req: ExpressReq, res: ExpressRes) => {
  res.sendFile(path.join(__dirname, '../src/public/index.html'));
});

app.use('*', (req: ExpressReq, res: ExpressRes) => {
  res.status(404).json({});
});

app.use((err: any, req: ExpressReq, res: ExpressRes, next: ExpressNext) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 500,
    message: { err: 'An error occurred' },
  };

  const errObj = Object.assign({}, defaultErr, err);

  return res.status(errObj.status).json(errObj.message);
});

module.exports = app;
export {};