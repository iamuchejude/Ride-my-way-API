// import ngfaker from 'ng-faker';
const ngfaker = require('ng-faker');

const rideOffers = [];

for (let i = 1; i <= 5; i += 1) {
  rideOffers.push({
    id: i,
    userId: ngfaker.random.number({ min: 1, max: 10 }),
    startLocation: ngfaker.address.localGovernment('lagos'),
    destination: ngfaker.address.localGovernment('lagos'),
    price: ngfaker.random.number({ min: 500, max: 7000 }),
    seat: ngfaker.random.number({ min: 1, max: 6 }),
    departureDate: '24th June, 2018',
    departureTime: '05:34:00AM',
    createdDate: new Date(),
  });
}

const RideOffers = {

  getOffers: () => rideOffers,

  getOneOffer: (id) => {
    for (let i = 0; i < rideOffers.length; i += 1) {
      if (rideOffers[i].id === id) return rideOffers[i];
    }
    return false;
  },

  addOffer: (data) => {
    rideOffers.push(data);
  },
};

module.exports = RideOffers;
