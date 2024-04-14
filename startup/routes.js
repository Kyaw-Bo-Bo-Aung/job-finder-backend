const express = require('express');
const jobs = require('./../routes/jobs');
const error = require('./../middleware/error');

module.exports = function(app) {
  app.use(express.json());
  app.use('/api/v1/jobs', jobs);
  app.use(error);
}