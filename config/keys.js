if (process.env.NODE_ENV === 'production') {
  module.exports = require('./keys_prod');
} else {
  module.exports = require('./keys_dev');
}

// module.exports = {
//   mongoURI: "mongodb://paul:paul@ds247569.mlab.com:47569/mernstack1984",
//   secretOrKey: "secret"
// };
