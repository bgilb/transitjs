var express = require('express');
var logger = require('morgan');

var app = express();
app.use(logger('dev')); // dev is for color logs

var routes = require('./routes');
app.use(routes);

// must be a 404 if the routes don't respond
app.use(function(req, res, next) {
  res.status(404);
  res.json({error: 'Not Found'});
})

// error handling middleware for development
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    if (err) {
      console.error(err.stack);
      next(err);
    } else {
      next();
    }
  });
}

// render json error message
app.use(function(err, req, res, next) {
  res.status(err.statusCode || err.status || 500);
  res.json({error: err.message});
});

module.exports = app;
