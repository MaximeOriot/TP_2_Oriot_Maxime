require('dotenv').config()
const express = require('express')
const cors = require("cors");
const userRouter = require('./routes/user');
const logger = require('./middleware/logger');
const connectDB = require('./config/db');
const app = express()
const port = process.env.PORT

app.use(cors());
app.use(express.json());
app.use(logger);
app.use('/api', userRouter);

const startServer = async () => {
  await connectDB();

  app.listen(port, () => {
    console.log(`Serveur Express lancé sur le port ${port}`);
  });
};

startServer();

exports.app = app;
