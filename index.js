const express = require('express');
require('express-async-errors');
const app = express();
var cors = require('cors');
const { PORT: port } = require('./config');
const jobs = require('./routes/jobs');
const categories = require('./routes/categories');
const logger = require('./logger');
const error = require('./middleware/error');

app.use(cors());
app.use(express.json());
app.get('/', (req, res) => {
  res.send("hello root");
});
app.use('/jobs', jobs);
app.use('/categories', categories);
app.use(error);

const serverPort = port || 3000;
app.listen(serverPort, () => {
  logger.info(`Listening on port ${serverPort}...`);
  console.log(`Listening on port ${serverPort}...`);
});