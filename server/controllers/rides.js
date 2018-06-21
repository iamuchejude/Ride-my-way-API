import RidesOffers from '../models/rideOffers';
import RideRequests from '../models/rideRequests';

class Rides {
  static getAllRideOffers(req, res) {
    if (RidesOffers.getOffers().length >= 1) {
      res.status(200).json({
        status: 'success',
        message: 'Available ride offers',
        data: RidesOffers.getOffers(),
      });
    }

    res.status(400).json({
      status: 'error',
      message: 'No available ride offer',
    });
  }

  static getOneRideOffer(req, res) {
    const { id } = parseInt(req.params, 10);
    const rideOffer = RidesOffers.getOneOffer(id);

    if (rideOffer === false) {
      res.status(400).json({
        status: 'error',
        message: 'Ride not found',
      });
    }

    res.status(200).json({
      status: 'success',
      message: 'Ride found',
      data: rideOffer,
    });
  }

  static createRideOffer(req, res) {
    return res;
  }

  static getAllRideRequests(req, res) {
    if (RideRequests.getRequests().length >= 1) {
      res.status(200).json({
        status: 'success',
        message: 'Available ride requests',
        data: RidesOffers.getRequests(),
      });
    }

    res.status(400).json({
      status: 'error',
      message: 'No available ride request',
    });
  }

  static getOneRideRequest(req, res) {
    const { id } = parseInt(req.params, 10);
    const rideOffer = RidesOffers.getOneOffer(id);

    if (rideOffer === false) {
      res.status(400).json({
        status: 'error',
        message: 'Ride not found',
      });
    }

    res.status(200).json({
      status: 'success',
      message: 'Ride found',
      data: rideOffer,
    });
  }

  static createRideRequest(req, res) {
    return res;
  }
}

module.exports = Rides;
export { Rides as default };

