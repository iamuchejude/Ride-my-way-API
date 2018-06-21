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

  getUsers() {
    return this.users;
  }

  getOneUser(id) {
    let user;
    for (let i = 1; i <= this.users.length; i += 1) {
      if (this.users[i].id === id) {
        user = this.users[i];
      }
    }
    return user;
  }

  addUser(data) {
    this.users.push(data);
  }
}

module.exports = Users;
export { Users as default };
