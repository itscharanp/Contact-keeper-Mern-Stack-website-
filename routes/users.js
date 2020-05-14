const express = require('express');
// router instead of app
const router = express.Router();

router.post('/', (req, res) => {
  res.send('Register a user');
});
module.exports = router;
