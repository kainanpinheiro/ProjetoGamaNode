const BaseService = require('./base-service');
const CadastroRepository = require('../repositories/cadastro-repository');
const EnderecoRepository = require('../repositories/endereco-repository');
const ViaCepUtil = require('../utils/viacep-util');

class CadastroService extends BaseService {
  constructor() {
    super(new CadastroRepository());
    this.enderecoRepository = new EnderecoRepository();
  }

  async getAll() {
    return await super.getAll(['endereco']);
  }

  async getById(id) {
    return await super.getById(id, ['endereco']);
  }

  async add(payload) {
    const logradouro = await ViaCepUtil.getEndereco(payload.cep);
    const endereco = await this.enderecoRepository.add(logradouro);
    payload.endereco_id = endereco.id;
    const cadastro = await super.add(payload);

    return await super.getById(cadastro.id, ['endereco']);
  }
}

module.exports = CadastroService;
