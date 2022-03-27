require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');

const configExpress = require('./config/express');
const routes = require('./routes');

const app = express();

configExpress(app);
routes(app);

const url = 'mongodb+srv://jlopezsa:veU1RfOrAevnUwSh@julianlopez.teizv.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
mongoose.connect(url);

const port = process.env.PORT || 3030;

app.listen(port, () => {
  console.log(`Server runnig at http://localhost:${port}/`);
});
