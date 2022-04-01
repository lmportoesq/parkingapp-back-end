/**
 * Main application routes
 */

const parkings = require('./api/parkings');
const bookings = require('./api/bookings');

function routes(app) {
  // API Routes
  app.use('/api/parkings', parkings);
  app.use('/api/bookings', bookings);
}

module.exports = routes;
