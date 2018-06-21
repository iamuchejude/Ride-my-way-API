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

var RideOffers = function () {
  function RideOffers() {
    _classCallCheck(this, RideOffers);

    this.ridesOffers = [];

    for (var i = 1; i <= 5; i += 1) {
      this.ridesOffers.push({
        id: i,
        userId: _ngFaker2.default.random.number({ min: 1, max: 10 }),
        startPoint: _ngFaker2.default.address.localGovernment('lagos'),
        destination: _ngFaker2.default.address.localGovernment('lagos'),
        price: _ngFaker2.default.random.number({ min: 500, max: 7000 }),
        seat: _ngFaker2.default.random.number({ min: 1, max: 6 }),
        departureDate: '24th June, 2018',
        departureTime: '05:34:00AM',
        createdDate: new Date()
      });
    }
  }

  _createClass(RideOffers, [{
    key: 'getOffers',
    value: function getOffers() {
      return this.rideOffers;
    }
  }, {
    key: 'getOneOffer',
    value: function getOneOffer(id) {
      for (var i = 0; i < this.ridesOffers.length; i += 1) {
        if (this.ridesOffers[i].id === id) return this.ridesOffers[i];
      }
      return false;
    }
  }, {
    key: 'addOffer',
    value: function addOffer(data) {
      this.ridesOffers.push(data);
    }
  }]);

  return RideOffers;
}();

module.exports = RideOffers;
exports.default = RideOffers;