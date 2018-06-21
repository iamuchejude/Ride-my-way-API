import ngfaker from 'ng-faker';

class Rides {
  constructor() {
    this.ridesOffers = [];

    // Populating ride Offers with 5 offers
    for (let i = 1; i <= 5; i += 1) {
      this.ridesOffers.push({
        id: i,
        user_id: ngfaker.random.number({ min: 1, max: 10 }),
        start_point: ngfaker.address.localGovernment('lagos'),
        destination: ngfaker.address.localGovernment('lagos'),
        price: ngfaker.random.number({ min: 500, max: 7000 }),
        seat: ngfaker.random.number({ min: 1, max: 6 }),
        departure_date: '24th June, 2018',
        departure_time: '05:34:00AM',
        created_date: new Date(),
      });
    }
  }

  getOffers() {
    return this.rideOffers;
  }

  addOffer(data) {
    this.ridesOffers.push(data);
  }

  getOneOffer(id) {
    let ride;
    for (let i = 0; i < this.ridesOffers.length; i += 1) {
      if (this.ridesOffers[i].id === id) ride = this.ridesOffers[i];
    }
    return ride;
  }
}

module.exports = Rides;
