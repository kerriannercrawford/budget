import express from 'express';
import dotenv from 'dotenv';
import { usersRouter } from './routers/users';
import { accountsRouter } from './routers/accounts';

dotenv.config();
const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/user', usersRouter);
app.use('/account', accountsRouter);

app.get('/', (req, res) => {
  res.send('success');
});

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});