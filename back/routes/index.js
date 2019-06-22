var express = require('express');

exports.index = function(req, res, next) {
  res.render('index', { title: 'Express' });
};
