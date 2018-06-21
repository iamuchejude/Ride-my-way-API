import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
  res.status(400).json({
    message: 'Error Message',
  });
});

module.exports = router;
