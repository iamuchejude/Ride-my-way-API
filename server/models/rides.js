// import ngfaker from 'ng-ngfaker';
const ngfaker = require('ng-faker');

class Rides {
  constructor() {
    this.rides = [];

    for (let i = 1; i <= 5; i += 1) {
      this.rides.push({
        id: i,
        user_id: i + 2,
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

  offers() {
    return this.rides;
  }
}
module.exports = Rides;
