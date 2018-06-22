import express from 'express';
import Rides from '../controllers/rides';

const router = express.Router();

router.get('/', (req, res) => {
  res.status(400).json({
    status: 'error',
    message: 'Not found',
  });
});

router.get('/rides', Rides.getAllRideOffers);
router.get('/rides/:id', Rides.getOneRideOffer);
router.post('/rides', Rides.createRideOffer);
router.post('/ride/:id/requests', Rides.createRideRequest);


module.exports = router;
export { router as default };
