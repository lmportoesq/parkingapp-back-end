const parkings = require('./api/parkings');
const bookings = require('./api/bookings');
const payments = require('./api/payments');
const users = require('./api/users');
const authLocal = require('./auth/local');
const upload = require('./api/upload');

function routes(app) {
  app.use('/api/parkings', parkings);
  app.use('/api/bookings', bookings);
  app.use('/api/payments', payments);
  app.use('/api/users', users);
  app.use('/api/upload', upload);
  app.use('/auth/local', authLocal);
}

module.exports = routes;
