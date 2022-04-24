require('dotenv').config();

const app = require('./app');

const port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log(`Server runnig at http://localhost:${port}/`);
});

module.exports = require('./app');
