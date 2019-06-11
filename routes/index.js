var express = require('express');
var router = express.Router();
// var html = require('../views/index.ejs') ;
/* GET home page. */
router.get('/', function(req, res, next) {
  // res.render('index.html');
  res.render('index.html', { title: 'Express' });
});

module.exports = router;
