const dotenv = require('dotenv');
const TokenService = require('./token-service');

dotenv.config();

class JwtAuthStrategy {
  static register = async (server) => {
    const config = {
      key: process.env.JWT_SECRET,
      validate: TokenService.validate,
    };

    server.auth.strategy('jwt', 'jwt', config);

    server.auth.default('jwt');
  };
}

module.exports = JwtAuthStrategy;
