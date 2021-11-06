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

app.use((err: any, req: any, res: any, next: any) => {
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