const express = require('express');
const router = express.Router();

// Do work here
router.get('/', (req, res) => {
  res.send('Hey! It works!');
});

router.get('/tobs', (req, res) => {
  const bigtobz = { name: 'Tobi Adeyemi', age: 26};

  res.json(bigtobz);
})

module.exports = router;