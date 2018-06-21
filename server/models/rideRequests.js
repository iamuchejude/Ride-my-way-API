import ngfaker from 'ng-faker';

class RideRequests {
  constructor() {
    this.rideRequests = [];

    for (let i = 0; i <= 5; i += 1) {
      this.ride_requests.push({
        id: i,
        user_id: ngfaker.random.number({ min: 1, max: 6 }),
        createdAt: new Date().toISOString(),
      });
    }
  }

  getRequests() {
    return this.ride_requests;
  }

  getOneRideOffer(id) {
    let rideRequest;
    for (let i = 0; i < this.ride_requests.length; i += 1) {
      if (this.ride_requests[i].id === id) {
        rideRequest = this.rideRequests[i];
      }
    }
    return rideRequest;
  }
}

module.exports = RideRequests;
export { RideRequests as default };
