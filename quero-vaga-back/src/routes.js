const express = require('express');

const router = express.Router();

const services = require('./services')

router.get('/', async (req, res) => {
  console.log('Received GET request');
  const response = await services.get_hello();
  if (response.error) {
    return res.status(500).send(response)
  }
  return res.send(response);
});


module.exports = router;
