module.exports = function(host) {
  var transit = {};
  var syncromatics = require('./syncromatics');

  transit.setOptions = function(id) {
    return function(req, res, next) {
      var options = req.params || {};
      options.id = id;
      options.host = host;
      req.transitOptions = options;
      next();
    }
  }

  transit.loadData = function(req, res, next) {
    syncromatics.get(req.transitOptions, function(error, json) {
      if (error) {
        error.statusCode = 500;
        next(error);
      } else {
        req.transitData = json
        next();
      }
    });
  }

  return transit;
};
