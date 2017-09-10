var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  let usersLink = {
    'Promise': '',
    'Observable': 'rx',
    'Async':'async'
  };
  res.render('index', { title: 'Express', usersLink });
});

module.exports = router;
