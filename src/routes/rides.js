import express from 'express';
import rides from '../controllers';

const router = express.Router();

router.get('/', (req, res) => {
  res.status(400).json({
    status: 'error',
    message: 'Not found',
  });
});

router.get('/rides', rides.getAllRideOffers);
router.get('/rides/:id', rides.getOneRideOffer);
router.post('/rides', rides.createRideOffer);
router.post('/ride/:id/requests', rides.createRideRequest);


module.exports = router;
export { router as default };
