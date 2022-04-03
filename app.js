require('dotenv').config();

const express = require('express');

const configExpress = require('./config/express');
const connectDB = require('./config/database');
const routes = require('./routes');

const app = express();

connectDB();
configExpress(app);
routes(app);

const port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log(`Server runnig at http://localhost:${port}/`);
});
