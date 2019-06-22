var request = require('request');

exports.stories = function (req, res, next) {
  const fetchUrl = 'https://hn.algolia.com/api/v1/search_by_date?tags=story&hitsPerPage=1000';
  request.get(
    fetchUrl,
    function(err, response, body) {
      if(err)
        console.log(err);
      res.json(response);
    }
  );
};

exports.story = function (req, res, next) {
  const fetchUrl = 'https://hn.algolia.com/api/v1/items/' + req.params.id;
  request.get(
    fetchUrl,
    function(err, response, body) {
      if(err)
        console.log(err);
      res.json(response);
    }
  );
};
