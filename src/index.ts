import express from 'express';

const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  res.send('success')
});

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`)
})