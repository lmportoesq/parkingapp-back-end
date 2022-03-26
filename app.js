require('dotenv').config();

const express = require('express');
const morgan = require('morgan');

const app = express();

app.use(express.json());
app.use(morgan('dev'));

const parkings = [
  {
    name: 'El calidoso',
    value: 2500,
  },
];

app.get('/info', (req, res) => {
  res.send('<h1>Hello server parkingapp</h1>');
});

const port = process.env.PORT || 3030;

app.listen(port, () => {
  console.log(`Server runnig at http://localhost:${port}/`);
});
