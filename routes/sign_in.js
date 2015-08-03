var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/sign_in', function(req, res, next) {
  res.send('respond with a resource');
});

/* GET users listing. */
router.get('/sign_up', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
