import express from 'express';
import dotenv from 'dotenv';
import apiRouter from './routers/api';

dotenv.config();
export const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api', apiRouter);

app.get('/', (req, res) => {
  res.status(200).json({});
});

app.use('*', (req, res) => {
  res.status(404).json({});
})

export default app;