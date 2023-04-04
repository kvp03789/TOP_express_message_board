const express = require('express');
const router = express.Router();
const { messages } = require('./index.js')

router.get('/', function(req, res, next) {
  res.render('new', { title: 'Create Message' });
});



module.exports = router