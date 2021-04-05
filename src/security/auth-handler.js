const CadastroRepository = require('../repositories/cadastro-repository');
const TokenService = require('./token-service');

class AuthHandler {
  constructor() {
    this.cadastroRepository = new CadastroRepository();
  }

  autenticate = async (req, h) => {
    try {
      const usuario = await this.cadastroRepository.getByUsername(
        req.payload.usuario,
      );

      if (!usuario) {
        return h.response({ message: 'Usuario não existe' }).code(400);
      }

      if (usuario.senha != req.payload.senha) {
        return h.response({ message: 'Senha não confere' }).code(400);
      }

      return { token: TokenService.generate(usuario) };
    } catch (err) {
      console.log(err);
      return err;
    }
  };
}

module.exports = new AuthHandler();
