const Jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
const { v4: uuidv4 } = require('uuid');

dotenv.config();

class TokenService {
  static generate = (usuario) => {
    const claims = {
      jti: uuidv4(),
      sub: usuario.id,
      //exp: moment().add(1, 'm').valueOf(), // vou fazer depois e enviar
      iss: 'biblioteca-api',
    };

    return Jwt.sign(claims, process.env.JWT_SECRET);
  };

  static validate = async (decoded, req, h) => {
    console.log(decoded);

    return { isValid: true };
  };
}

module.exports = TokenService;
