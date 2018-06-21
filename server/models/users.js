// import ngfaker from 'ng-ngfaker';
const ngfaker = require('ng-faker');

class Users {
  constructor() {
    this.users = [];

    for (let i = 1; i <= 15; i += 1) {
      const firstName = ngfaker.name.firstName();
      this.users.push({
        id: i,
        firstName,
        lastName: ngfaker.name.lastName(),
        email: `${firstName.toLowerCase()}.${i}@gmail.com`,
        phoneNumber: ngfaker.phone.phoneNumber(),
        createdAt: new Date(),
        updatedAt: new Date(),
      });
    }
  }

  get() {
    return this.users;
  }
}

module.exports = Users;
