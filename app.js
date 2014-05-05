var express = require('express');
var logger = require('morgan');
var request = require('superagent');
var _ = require('underscore');

var app = express();
var host = 'http://www.pennrides.com';

app.use(logger('dev'));

// Regions:   /regions
// Region:    /regions/<int:region_id>
// Routes:    /regions/<int:region_id>/routes
// Route:     /regions/<int:region_id>/routes/<int:route_id>
// Waypoints: /regions/<int:region_id>/routes/<int:route_id>/waypoints
// Stops:     /regions/<int:region_id>/routes/<int:route_id>/direction/<int:direction_id>/stops
// Vehicles:  /regions/<int:region_id>/routes/<int:route_id>/vehicles

// Regions:   /regions
app.get('/regions', function(req, res) {
  request
    .get(host+'/regions')
    .accept('json')
    .end(function(res2) {
      if (res2.error) {
        res.json(res2.error);
      } else {
        res.json(res2.body);
      }
    });
});

// Region:    /regions/<int:region_id>
app.get('/regions/:region_id', function(req, res) {
  request
    .get(host+'/regions')
    .accept('json')
    .end(function(res2) {
      if (res2.error) {
        res.json(res2.error);
      } else {
        _.each(res2.body, function(region, index) {
          if (region.ID == req.params.region_id) {
            res.json(region);
            return;
          }
        })
        res.json({});
      }
    });
});

// Routes:    /regions/<int:region_id>/routes
app.get('/regions/:region_id/routes', function(req, res) {
  request
    .get(host+'/region/' + req.params.region_id + '/routes')
    .accept('json')
    .end(function(res2) {
      if (res2.error) {
        res.json(res2.error);
      } else {
        res.json(res2.body);
      }
    });
});

// Route:     /regions/<int:region_id>/routes/<int:route_id>
app.get('/regions/:region_id/routes/:route_id', function(req, res) {
  request
    .get(host+'/region/' + req.params.region_id + '/routes')
    .accept('json')
    .end(function(res2) {
      if (res2.error) {
        res.json(res2.error);
      } else {
        _.each(res2.body, function(route, index) {
          if (route.ID == req.params.route_id) {
            res.json(route);
            return;
          }
        })
        res.json({});
      }
    });
});

// Waypoints: /regions/<int:region_id>/routes/<int:route_id>/waypoints
app.get('/regions/:region_id/routes/:route_id/waypoints', function(req, res) {
  request
    .get(host+'/route/' + req.params.route_id + '/waypoints')
    .accept('json')
    .end(function(res2) {
      if (res2.error) {
        res.json(res2.error);
      } else {
        res.json(res2.body[0]);
      }
    });
});


// Stops:     /regions/<int:region_id>/routes/<int:route_id>/direction/<int:direction_id>/stops
app.get('/regions/:region_id/routes/:route_id/direction/:direction_id/stops', function(req, res) {
  request
    .get(host + '/route/' + req.params.route_id + '/direction/0/stops')
    .accept('json')
    .end(function(res2) {
      if (res2.error) {
        res.json(res2.error);
      } else {
        res.json(res2.body);
      }
    });
});

// Vehicles:  /regions/<int:region_id>/routes/<int:route_id>/vehicles
app.get('/regions/:region_id/routes/:route_id/vehicles', function(req, res) {
  request
    .get(host + '/route/' + req.params.route_id + '/vehicles')
    .accept('json')
    .end(function(res2) {
      if (res2.error) {
        res.json(res2.error);
      } else {
        res.json(res2.body);
      }
    });
});

var port = Number(process.env.PORT || 3000);
var server = app.listen(port, function() {
  console.log('Listening on port %d', server.address().port);
});