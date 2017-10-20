var express = require('express');
var router = express.Router();
//
var path = require('path');

/* GET about page. */
router.get('/', function(req, res, next) {
  // res.render('index', { title: 'Express' });
  res.sendFile(path.join(__dirname, '../views/news1.html'));
});

module.exports = router;
