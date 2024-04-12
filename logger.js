const winston = require('winston');
const { combine, timestamp, json, errors } = winston.format;

const errorFilter = winston.format((info, opts) => {
  return info.level === 'error' ? info : false;
});

const infoFilter = winston.format((info, opts) => {
  return info.level === 'info' ? info : false;
});

const logger = winston.createLogger({
  level: process.env.LOG_LEVEL || 'info',
  format: combine(timestamp(), json()),
  transports: [
    new winston.transports.File({
      filename: './log/combined.log',
    }),
    new winston.transports.File({
      filename: './log/app-error.log',
      level: 'error',
      format: combine(errors({ stack: true }), errorFilter(), timestamp(), json()),
    }),
    new winston.transports.File({
      filename: './log/app-info.log',
      level: 'info',
      format: combine(infoFilter(), timestamp(), json()),
    }),
  ],
  exceptionHandlers: [
    new winston.transports.File({ filename: './log/exception.log' }),
  ],
  rejectionHandlers: [
    new winston.transports.File({ filename: './log/rejections.log' }),
  ],
});

module.exports = logger;