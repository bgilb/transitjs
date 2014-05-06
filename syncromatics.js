var request = require('superagent');
var _ = require('underscore');

var syncromatics = {};

syncromatics.regions = function(options, callback) {
  var host = options.host;
  request
    .get(host + '/regions')
    .accept('json')
    .end(function(err, res) {
      if (err) {
        callback(err);
      } else {
        var regions = res.body;
        callback(null, regions);
      }
    });
}

syncromatics.region = function(options, callback) {
  var host = options.host;
  var regionId = Number(options.regionId);
  request
    .get(host + '/regions')
    .accept('json')
    .end(function(err, res) {
      if (err) {
        callback(err);
      } else {
        var region = _.findWhere(res.body, {ID: regionId});
        if (region) {
          callback(null, region);
        } else {
          callback(null, {});
        }
      }
    });
}

syncromatics.routes = function(options, callback) {
  var host = options.host;
  var regionId = Number(options.regionId);
  request
    .get(host + '/region/' + regionId + '/routes')
    .accept('json')
    .end(function(err, res) {
      if (err) {
        callback(err);
      } else {
        var routes = res.body;
        callback(null, routes);
      }
    });
};

syncromatics.route = function(options, callback) {
  var host = options.host;
  var regionId = Number(options.regionId);
  var routeId = Number(options.routeId);
  request
    .get(host + '/region/' + regionId + '/routes')
    .accept('json')
    .end(function(err, res) {
      if (err) {
        callback(err);
      } else {
        var route = _.findWhere(res.body, {ID: routeId});
        if (route) {
          callback(null, route);
        } else {
          callback(null, {});
        }
      }
    });
};

syncromatics.waypoints = function(options, callback) {
  var host = options.host;
  var regionId = Number(options.regionId);
  var routeId = Number(options.routeId);
  request
    .get(host + '/route/' + routeId + '/waypoints')
    .accept('json')
    .end(function(err, res) {
      if (err) {
        callback(err);
      } else {
        var waypoints = _.first(res.body);
        callback(null, waypoints);
      }
    });
};

syncromatics.stops = function(options, callback) {
  var host = options.host;
  var regionId = Number(options.regionId);
  var routeId = Number(options.routeId);
  var directionId = Number(options.directionId);
  request
    .get(host + '/route/' + routeId + '/direction/' + directionId + '/stops')
    .accept('json')
    .end(function(err, res) {
      if (err) {
        callback(err);
      } else {
        var stops = res.body;
        callback(null, stops);
      }
    });
}

syncromatics.vehicles = function(options, callback) {
  var host = options.host;
  var regionId = Number(options.regionId);
  var routeId = Number(options.routeId);
  request
    .get(host + '/route/' + routeId + '/vehicles')
    .accept('json')
    .end(function(err, res) {
      if (err) {
        callback(err);
      } else {
        var vehicles = res.body;
        callback(null, vehicles);
      }
    });
};

module.exports = syncromatics;