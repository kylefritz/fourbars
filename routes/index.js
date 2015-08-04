var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/user', function(req, res, next) {
  res.json({
  	user: "Ryan"
  })
});

router.get('/topics', function(req, res, next) {
  res.json({
  	topic: "Cold Winter Morning"
  })
});

router.get('/topic-list', function(req, res, next) {
  res.json({
  	topics: [
      "Cool Winter Morning",
      "Didn't Eat Breakfast",
      "Favorite Song",
      "The Hustle vs the Struggle"
      ]

  })
});


module.exports = router;
