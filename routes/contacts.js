const express = require('express');
// router instead of app
const router = express.Router();

router.get('/', (req, res) => {
  res.send('get all contacts');
});

router.post('/', (req, res) => {
  res.send('Add contact');
});

router.put('/:id', (req, res) => {
  res.send('Update contact');
});

router.delete('/:id', (req, res) => {
  res.send('Delete contact');
});

module.exports = router;
