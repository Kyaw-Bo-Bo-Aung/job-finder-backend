const logger = require("../logger");

module.exports = function(err, req, res, next){
  const statusCode = err.code || 500;
  const message = err.error || "Something went wrong";
  
  logger.log({level: 'error', message: err});
  res.status(statusCode).send(message);
}