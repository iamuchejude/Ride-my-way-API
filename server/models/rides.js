import ngfaker from 'ng-faker';

class Rides {
  constructor() {
    this.ridesOffers = [];

    for (let i = 1; i <= 5; i += 1) {
      this.ridesOffers.push({
        id: i,
        userId: ngfaker.random.number({ min: 1, max: 10 }),
        startPoint: ngfaker.address.localGovernment('lagos'),
        destination: ngfaker.address.localGovernment('lagos'),
        price: ngfaker.random.number({ min: 500, max: 7000 }),
        seat: ngfaker.random.number({ min: 1, max: 6 }),
        departureDate: '24th June, 2018',
        departureTime: '05:34:00AM',
        createdDate: new Date(),
      });
    }
  }

  getOffers() {
    return this.rideOffers;
  }

  getOneOffer(id) {
    let ride;
    for (let i = 0; i < this.ridesOffers.length; i += 1) {
      if (this.ridesOffers[i].id === id) ride = this.ridesOffers[i];
    }
    return ride;
  }

  addOffer(data) {
    this.ridesOffers.push(data);
  }
}

module.exports = Rides;
export { Rides as default };
