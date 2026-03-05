const express = require('express')
const cors = require("cors");
const userRouter = require('./routes/user');
const logger = require('./middleware/logger');
const app = express()
const port = 3001

app.use(cors());
app.use(express.json());
app.use(logger);
app.use('/api', userRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

exports.app = app;
