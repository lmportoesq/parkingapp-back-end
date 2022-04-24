const parkings = require('./api/parkings');
const bookings = require('./api/bookings');
const payments = require('./api/payments');
const users = require('./api/users');
const authLocal = require('./auth/local');

function routes(app) {
  // API Routes
  app.use('/api/parkings', parkings);
  app.use('/api/bookings', bookings);
  app.use('/api/payments', payments);
  app.use('/api/users', users);

  // auth Routes
  app.use('/auth/local', authLocal);
}

module.exports = routes;
