/**
 * Main application routes
 */

const parkings = require('./api/parkings');

function routes(app) {
  // API Routes
  app.use('/api/parkings', parkings);
}

module.exports = routes;
