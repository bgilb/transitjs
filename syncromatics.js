var request = require('superagent');
var _ = require('underscore');

var syncromatics = {};

syncromatics.regions = function(options, callback) {
  var host = options.host;
  request
    .get(host+'/regions')
    .accept('json')
    .end(function(res) {
      if (res.error) {
        callback({error: res.error});
      } else {
        var regions = res.body;
        callback(regions);
      }
    });
}

syncromatics.region = function(options, callback) {
  var host = options.host;
  var regionId = Number(options.regionId);
  request
    .get(host+'/regions')
    .accept('json')
    .end(function(res) {
      if (res.error) {
        callback({error: res.error});
      } else {
        var region = _.findWhere(res.body, {ID: regionId});
        if (region) {
          callback(region);
        } else {
          callback({});
        }
      }
    });
}

syncromatics.routes = function(options, callback) {
  var host = options.host;
  var regionId = Number(options.regionId);
  request
    .get(host+'/region/' + regionId + '/routes')
    .accept('json')
    .end(function(res) {
      if (res.error) {
        callback({error: res.error});
      } else {
        var routes = res.body;
        callback(routes);
      }
    });
};

syncromatics.route = function(options, callback) {
  var host = options.host;
  var regionId = Number(options.regionId);
  var routeId = Number(options.routeId);
  request
    .get(host+'/region/' + regionId + '/routes')
    .accept('json')
    .end(function(res) {
      if (res.error) {
        callback({error: res.error});
      } else {
        var route = _.findWhere(res.body, {ID: routeId});
        if (route) {
          callback(route);
        } else {
          callback({});
        }
      }
    });
};

syncromatics.waypoints = function(options, callback) {
  var host = options.host;
  var regionId = Number(options.regionId);
  var routeId = Number(options.routeId);
  request
    .get(host+'/route/' + routeId + '/waypoints')
    .accept('json')
    .end(function(res) {
      if (res.error) {
        callback({error: res.error});
      } else {
        var waypoints = _.first(res.body);
        callback(waypoints);
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
    .end(function(res) {
      if (res.error) {
        callback({error: res.error});
      } else {
        var stops = res.body;
        callback(stops);
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
    .end(function(res) {
      if (res.error) {
        callback({error: res.error});
      } else {
        var vehicles = res.body;
        callback(vehicles);
      }
    });
};

module.exports = syncromatics;