import express from 'express';
import dotenv from 'dotenv';
import { apiRouter } from './routers/api';

dotenv.config();
const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api', apiRouter)

app.get('/', (req, res) => {
  res.send('success');
});

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});