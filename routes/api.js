var express = require('express');
var router = express.Router();
var api = require('../services/dbApi')

router.get('/user', function(req, res, next) {
  res.json({
    user: "Ryan"
  })
});

router.get('/topics', function(req, res, next) {
  api.retrieveTopics(function(topics){
    res.json({
      topic: topics[0]
    })
  })
});

router.get('/topic-list', function(req, res, next) {
  api.retrieveTopics(function(topics){
    res.json({
      topics: topics
    })
  })
});


module.exports = router;
