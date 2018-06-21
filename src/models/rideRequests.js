'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _ngFaker = require('ng-faker');

var _ngFaker2 = _interopRequireDefault(_ngFaker);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var RideRequests = function () {
  function RideRequests() {
    _classCallCheck(this, RideRequests);

    this.rideRequests = [];

    for (var i = 0; i <= 5; i += 1) {
      this.ride_requests.push({
        id: i,
        user_id: _ngFaker2.default.random.number({ min: 1, max: 6 }),
        createdAt: new Date().toISOString()
      });
    }
  }

  _createClass(RideRequests, [{
    key: 'getRequests',
    value: function getRequests() {
      return this.ride_requests;
    }
  }, {
    key: 'getOneRideOffer',
    value: function getOneRideOffer(id) {
      var rideRequest = void 0;
      for (var i = 0; i < this.ride_requests.length; i += 1) {
        if (this.ride_requests[i].id === id) {
          rideRequest = this.rideRequests[i];
        }
      }
      return rideRequest;
    }
  }]);

  return RideRequests;
}();

module.exports = RideRequests;
exports.default = RideRequests;