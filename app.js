var express = require('express');
var logger = require('morgan');

var app = express();
app.use(logger('dev'));
app.set('syncromatics-host', 'http://www.pennrides.com');

var routes = require('./routes');
app.use(routes);

var port = Number(process.env.PORT || 3000);
var server = app.listen(port, function() {
  console.log('Listening on port %d', server.address().port);
});