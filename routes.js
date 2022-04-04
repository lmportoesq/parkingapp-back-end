const parkings = require('./api/parkings');

const bookings = require('./api/bookings');
const payments = require('./api/payments');
const users = require('./api/users');

function routes(app) {
  // API Routes
  app.use('/api/parkings', parkings);
  app.use('/api/bookings', bookings);
  app.use('/api/payments', payments);
  app.use('/api/users', users);
}

module.exports = routes;
