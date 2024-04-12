const express = require('express');
const { getCategories } = require('./../services/categoryService');
const router = express.Router();

router.get('/', (req, res) => {
    const categories = getCategories();
    res.send(categories);
});

// for filtering 
  // all jobs -> get filtered jobs
  // for selected category -> get all selected category and sort at frontend.

/** reason is => to reduces server  */

// router.get('/jobs?', (req, res) => {
//   res.send('hello world');
// });

module.exports = router;