'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// import ngfaker from 'ng-ngfaker';
var ngfaker = require('ng-faker');

var Users = function () {
  function Users() {
    _classCallCheck(this, Users);

    this.users = [];

    for (var i = 1; i <= 15; i += 1) {
      var firstName = ngfaker.name.firstName();
      this.users.push({
        id: i,
        firstName: firstName,
        lastName: ngfaker.name.lastName(),
        email: firstName.toLowerCase() + '.' + i + '@gmail.com',
        phoneNumber: ngfaker.phone.phoneNumber(),
        createdAt: new Date(),
        updatedAt: new Date()
      });
    }
  }

  _createClass(Users, [{
    key: 'getUsers',
    value: function getUsers() {
      return this.users;
    }
  }, {
    key: 'getOneUser',
    value: function getOneUser(id) {
      for (var i = 1; i <= this.users.length; i += 1) {
        if (this.users[i].id === id) return this.users[i];
      }
      return false;
    }
  }, {
    key: 'addUser',
    value: function addUser(data) {
      this.users.push(data);
    }
  }]);

  return Users;
}();

module.exports = Users;
exports.default = Users;