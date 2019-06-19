var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.json([{
    id: 1,
    name: "John Doe"
  }, {
    id: 2,
    name: "Jane Doe"
  }, {
    id: 3,
    name: "John Wayne"
  }, {
    id: 4,
    name: "Bill Murray"
  }, {
    id: 5,
    name: "Leonardo DiCaprio"
  }, {
    id: 6,
    name: "John Gosling"
  }, {
    id: 7,
    name: "Sasha Grey"
  }, {
    id: 8,
    name: "Krysta Kaos"
  }, {
    id: 9,
    name: "John Rubi"
  }, {
    id: 10,
    name: "Barack Obama"
  }, {
    id: 11,
    name: "Queen Elizabeth"
  }, {
    id: 12,
    name: "John Jackson"
  }, {
    id: 13,
    name: "Dele Ali"
  }]);
});

module.exports = router;
