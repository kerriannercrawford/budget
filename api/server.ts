const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const apiRouter = require('./routers/api');
const dev = process.env.NODE_ENV !== 'production';
const mongoose = require('mongoose');
const next = require('next');
const app = next({ dev });
const handle = app.getRequestHandler();
const PORT = 3000;

app.prepare().then(() => {
  const server = express();

  server.use(express.json());
  server.use(cookieParser());
  server.use(express.urlencoded({ extended: true }));

  server.use('/api', apiRouter);

  server.get('*', (req: any, res: any) => {
    return handle(req, res)
  });

  mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }).then(() => {
    server.listen(PORT, () => {
      console.log(`Server started on port ${PORT}`);
    });
  }).catch((e: any) => console.log(JSON.stringify(e)));
});

export {}