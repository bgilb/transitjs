
// Regions:   /regions
// Region:    /regions/<int:region_id>
// Routes:    /regions/<int:region_id>/routes
// Route:     /regions/<int:region_id>/routes/<int:route_id>
// Waypoints: /regions/<int:region_id>/routes/<int:route_id>/waypoints
// Stops:     /regions/<int:region_id>/routes/<int:route_id>/direction/<int:direction_id>/stops
// Vehicles:  /regions/<int:region_id>/routes/<int:route_id>/vehicles

var express = require('express');

var router = express.Router();
var syncromatics = require('./syncromatics');

router.route('/regions')
  .get(function(req, res) {
    var options = {
      host: req.app.get('syncromatics-host')
    }
    syncromatics.regions(options, function(regions) {
      res.json(regions);
    });
  });

router.route('/regions/:regionId')
  .get(function(req, res) {
    var options = {
      host: req.app.get('syncromatics-host'),
      regionId: req.params.regionId
    };
    syncromatics.region(options, function(region) {
      res.json(region);
    });
  });

router.route('/regions/:regionId/routes')
  .get(function(req, res) {
    var options = {
      host: req.app.get('syncromatics-host'),
      regionId: req.params.regionId
    };
    syncromatics.routes(options, function(routes) {
      res.json(routes);
    });
  });

router.route('/regions/:regionId/routes/:routeId')
  .get(function(req, res) {
    var options = {
      host: req.app.get('syncromatics-host'),
      regionId: req.params.regionId,
      routeId: req.params.routeId
    };
    syncromatics.route(options, function(route) {
      res.json(route);
    });
  });

router.route('/regions/:regionId/routes/:routeId/waypoints')
  .get(function(req, res) {
    var options = {
      host: req.app.get('syncromatics-host'),
      regionId: req.params.regionId,
      routeId: req.params.routeId
    };
    syncromatics.waypoints(options, function(waypoints) {
      res.json(waypoints);
    });
  });

router.route('/regions/:regionId/routes/:routeId/direction/:directionId/stops')
  .get(function(req, res) {
    var options = {
      host: req.app.get('syncromatics-host'),
      regionId: req.params.regionId,
      routeId: req.params.routeId,
      directionId: req.params.directionId
    };
    syncromatics.stops(options, function(stops) {
      res.json(stops);
    });
  });

router.route('/regions/:regionId/routes/:routeId/vehicles')
  .get(function(req, res) {
    var options = {
      host: req.app.get('syncromatics-host'),
      regionId: req.params.regionId,
      routeId: req.params.routeId
    };
    syncromatics.vehicles(options, function(vehicles) {
      res.json(vehicles);
    });
  });

module.exports = router;