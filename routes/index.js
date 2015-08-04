var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/user', function(req, res, next) {
  res.json({
  	user: "ryan"
  })
});

router.get('/topics', function(req, res, next) {
  res.json({
  	topic: "cool winter morning"
  })
});

module.exports = router;
