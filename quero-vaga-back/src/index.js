const dotenv = require('dotenv');
const express = require('express');

dotenv.config();

const app = express();
app.use(require('./routes'))

const port = process.env.QUERO_VAGA_BACK_PORT || 3000;
app.listen(port, () => {
  console.info('Listening on port', port);
});
