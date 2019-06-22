var request = require('request');

exports.stories = function (req, res, next) {
  request.get(
    'https://hn.algolia.com/api/v1/search_by_date?tags=story&hitsPerPage=1000',
    function(err, response, body) {
      if(err)
        console.log(err);
      res.json(response);
    }
  );
};
