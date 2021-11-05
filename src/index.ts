require('dotenv').config()
import express from 'express';

const app = express();
const PORT = 3000;

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
  res.send('success')
});

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`)
})