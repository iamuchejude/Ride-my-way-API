'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _rideOffers = require('../models/rideOffers');

var _rideOffers2 = _interopRequireDefault(_rideOffers);

var _rideRequests = require('../models/rideRequests');

var _rideRequests2 = _interopRequireDefault(_rideRequests);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Rides = function () {
  function Rides() {
    _classCallCheck(this, Rides);
  }

  _createClass(Rides, null, [{
    key: 'getAllRideOffers',
    value: function getAllRideOffers(req, res) {
      if (_rideOffers2.default.getOffers().length >= 1) {
        res.status(200).json({
          status: 'success',
          message: 'Available ride offers',
          data: _rideOffers2.default.getOffers()
        });
      }

      res.status(400).json({
        status: 'error',
        message: 'No available ride offer'
      });
    }
  }, {
    key: 'getOneRideOffer',
    value: function getOneRideOffer(req, res) {
      var id = req.params.id;

      var rideOffer = _rideOffers2.default.getOneOffer(id);

      if (rideOffer === false) {
        res.status(400).json({
          status: 'error',
          message: 'Ride not found'
        });
      }

      res.status(200).json({
        status: 'success',
        message: 'Ride found',
        data: rideOffer
      });
    }
  }, {
    key: 'createRideOffer',
    value: function createRideOffer(req, res) {
      return res;
    }
  }, {
    key: 'getAllRideRequests',
    value: function getAllRideRequests(req, res) {
      if (_rideRequests2.default.getRequests().length >= 1) {
        res.status(200).json({
          status: 'success',
          message: 'Available ride requests',
          data: _rideOffers2.default.getRequests()
        });
      }

      res.status(400).json({
        status: 'error',
        message: 'No available ride request'
      });
    }
  }, {
    key: 'getOneRideRequest',
    value: function getOneRideRequest(req, res) {
      var id = req.params.id;

      var rideOffer = _rideOffers2.default.getOneOffer(id);

      if (rideOffer === false) {
        res.status(400).json({
          status: 'error',
          message: 'Ride not found'
        });
      }

      res.status(200).json({
        status: 'success',
        message: 'Ride found',
        data: rideOffer
      });
    }
  }, {
    key: 'createRideRequest',
    value: function createRideRequest(req, res) {
      return res;
    }
  }]);

  return Rides;
}();

module.exports = Rides;
exports.default = Rides;