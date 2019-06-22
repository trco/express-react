var express = require('express');
var request = require('request');
var router = express.Router();

router.get('/', function(req, res, next) {
  request.get(
    'https://hn.algolia.com/api/v1/search_by_date?tags=story&hitsPerPage=1000',
    function(err, response, body) {
      if(err)
        console.log(err);
      res.json(response);
    }
  );
});

module.exports = router;
