var router = require('express').Router();
var transit = require('./transit')('http://www.pennrides.com');

router.route('/regions')
  .get(transit.setOptions('regions'), transit.loadData);

router.route('/regions/:regionId')
  .get(transit.setOptions('region'), transit.loadData);

router.route('/regions/:regionId/routes')
  .get(transit.setOptions('routes'), transit.loadData);

router.route('/regions/:regionId/routes/:routeId')
  .get(transit.setOptions('route'), transit.loadData);

router.route('/regions/:regionId/routes/:routeId/waypoints')
  .get(transit.setOptions('waypoints'), transit.loadData);

router.route('/regions/:regionId/routes/:routeId/direction/:directionId/stops')
  .get(transit.setOptions('stops'), transit.loadData);

router.route('/regions/:regionId/routes/:routeId/vehicles')
  .get(transit.setOptions('vehicles'), transit.loadData);

router.use(function(req, res, next) {
  if (req.transitData) {
    res.json(req.transitData);
  } else {
    next();
  }
})

module.exports = router;
