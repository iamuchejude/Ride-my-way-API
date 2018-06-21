// import ngfaker from 'ng-ngfaker';
const ngfaker = require('ng-faker');

const users = [];

for (let i = 1; i <= 15; i += 1) {
  const firstName = ngfaker.name.firstName();
  users.push({
    id: i,
    firstName,
    lastName: ngfaker.name.lastName(),
    email: `${firstName.toLowerCase()}.${i}@gmail.com`,
    phoneNumber: ngfaker.phone.phoneNumber(),
    created_date: new Date(),
    updated_date: new Date(),
  });
}

class Users {
  constructor() {
    this.users = [];

    for (let i = 1; i <= 15; i += 1) {
      const firstName = ngfaker.name.firstName();
      users.push({
        id: i,
        firstName,
        lastName: ngfaker.name.lastName(),
        email: `${firstName.toLowerCase()}.${i}@gmail.com`,
        phoneNumber: ngfaker.phone.phoneNumber(),
        created_date: new Date(),
        updated_date: new Date(),
      });
    }
  }

  get() {
    return this.users;
  }
}

users.map(user => console.log(user.firstName));
module.exports = users;
