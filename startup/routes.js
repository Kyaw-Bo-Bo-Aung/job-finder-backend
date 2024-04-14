const express = require('express');
const jobs = require('./../routes/jobs');
const categories = require('./../routes/categories');
const error = require('./../middleware/error');

module.exports = function(app) {
  app.use(express.json());
  app.use('/api/v1/jobs', jobs);
  app.use('/api/v1/categories', categories);
  app.use(error);
}