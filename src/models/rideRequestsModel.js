import ngfaker from 'ng-faker';

module.exports = class RideRequests {
  constructor() {
    this.rideRequests = [];

    for (let i = 0; i <= 5; i += 1) {
      this.rideRequests.push({
        id: i,
        user_id: ngfaker.random.number({ min: 1, max: 6 }),
        createdAt: new Date().toISOString(),
      });
    }
  }

  static getRequests() {
    return this.rideRequests;
  }

  static getOneRideRequest(id) {
    let rideRequest;
    for (let i = 0; i < this.rideRequests.length; i += 1) {
      if (this.rideRequests[i].id === id) {
        rideRequest = this.rideRequests[i];
      }
    }
    return rideRequest;
  }

  static createRequest(data) {
    this.rideRequests.push(data);
  }
};
