const express = require('express');
// router instead of app
const router = express.Router();

router.get('/', (req, res) => {
  res.send('Get logged in a user');
});

router.post('/', (req, res) => {
  res.send('Login user');
});

module.exports = router;
