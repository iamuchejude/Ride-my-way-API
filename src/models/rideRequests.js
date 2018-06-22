import ngfaker from 'ng-faker';

class RideRequests {
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

  getRequests() {
    return this.rideRequests;
  }

  getOneRideRequest(id) {
    let rideRequest;
    for (let i = 0; i < this.rideRequests.length; i += 1) {
      if (this.rideRequests[i].id === id) {
        rideRequest = this.rideRequests[i];
      }
    }
    return rideRequest;
  }

  createRequest(data) {
    this.rideRequests.push(data);
  }
}

module.exports = RideRequests;
export { RideRequests as default };
