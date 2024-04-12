const express = require('express');
const { getJobs } = require('./../services/jobService');
const router = express.Router();

router.get('/', async (req, res) => {
    // https:localhost:3000/jobs?page=1&
    const { page, category, ...searchQuery } = req.query;
    const data = await getJobs(page, category, searchQuery);
    res.send(data);
});

//fetch company to onChange Input
//  

router.get('/', async (req, res) => {
    const data = await getJobs();
    res.send(data);
});

router.get('/:id', (req, res) => {
  res.send('hello job detials');
});

// for filtering 
  // all jobs -> get filtered jobs
  // for selected category -> get all selected category and sort at frontend.

/** reason is => to reduces server  */

// router.get('/jobs?', (req, res) => {
//   res.send('hello world');
// });

module.exports = router;