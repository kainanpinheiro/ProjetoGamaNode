const fetch = require('node-fetch');

class ViaCepUtil {
  static async getEndereco(cep) {
    const response = await fetch(`https://viacep.com.br/ws/${cep}/json`);
    const endereco = await response.json();
    return endereco;
  }
}

module.exports = ViaCepUtil;
