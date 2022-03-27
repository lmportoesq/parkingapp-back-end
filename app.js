require('dotenv').config();

const express = require('express');
const configExpress = require('./config/express');
const routes = require('./routes');

const app = express();

configExpress(app);
routes(app);

const port = process.env.PORT || 3030;

app.listen(port, () => {
  console.log(`Server runnig at http://localhost:${port}/`);
});
