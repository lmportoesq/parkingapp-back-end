/**
 * Main application routes
 */

const parkings = require('./api/parkings');
const payments = require('./api/payments');

function routes(app) {
  // API Routes
  app.use('/api/parkings', parkings);
  app.use('/api/payments', payments);
}

module.exports = routes;
