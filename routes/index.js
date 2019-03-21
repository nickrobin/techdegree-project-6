const express = require('express');
const router = express.Router();
const data = require('../data.json');

router.get('/', (req, res) => {
  res.render('index', { data: data });
})

router.get('/about', (req, res) => {
  res.render('about', { data: data });
})

module.exports = router;
