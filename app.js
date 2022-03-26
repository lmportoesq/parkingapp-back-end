require('dotenv').config();

const express = require('express');
const morgan = require('morgan');

const routes = require('./routes');

const app = express();

routes(app);

app.use(express.json());
app.use(morgan('dev'));

const parkings = [
  {
    name: 'El calidoso',
    value: 2500,
  },
];

const port = process.env.PORT || 3030;

app.listen(port, () => {
  console.log(`Server runnig at http://localhost:${port}/`);
});
