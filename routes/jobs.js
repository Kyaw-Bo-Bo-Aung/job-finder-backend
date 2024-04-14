const express = require('express');
const { getJobs } = require('./../services/jobService');
const router = express.Router();

router.get('/', async (req, res) => {
    const { page, category, ...searchQuery } = req.query;
    const data = await getJobs(page, category, searchQuery);
    res.send(data);
});

module.exports = router;