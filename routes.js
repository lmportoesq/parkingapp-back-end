const parkings = require('./api/parkings');
const users = require('./api/users');

function routes(app) {
  // API Routes
  app.use('/api/parkings', parkings);
  app.use('/api/users', users);
}

module.exports = routes;
