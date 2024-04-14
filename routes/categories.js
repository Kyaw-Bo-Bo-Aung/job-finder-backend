const express = require('express');
const { getCategories } = require('./../services/categoryService');
const router = express.Router();

router.get('/', (req, res) => {
    const categories = getCategories();
    res.send(categories);
});

module.exports = router;