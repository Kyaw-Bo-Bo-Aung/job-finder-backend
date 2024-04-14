const express = require('express');
require('express-async-errors');
const app = express();
const { PORT: port } = require('./config');
const logger = require('./logger');

require("./startup/cors")(app);
require("./startup/routes")(app);

const serverPort = port || 3000;
app.listen(serverPort, () => {
  logger.info(`Listening on port ${serverPort}...`);
  console.log(`Listening on port ${serverPort}...`);
});