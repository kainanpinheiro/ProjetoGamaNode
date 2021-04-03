const BaseService = require('./baseService');
const CadastroRepository = require('../repositories/cadastroRepository');
const EnderecoRepository = require('../repositories/enderecoRepository');
const ViaCepUtil = require('../utils/viacep-util');
const EnderecoModel = require('../database/models/enderecoModel');

class CadastroService extends BaseService {
  constructor() {
    super(new CadastroRepository());
    this.enderecoRepository = new EnderecoRepository();
  }

  async add(payload) {
    const logradouro = await ViaCepUtil.getEndereco(payload.cep);
    const endereco = await this.enderecoRepository.add(logradouro);
    payload.endereco_id = endereco.id;
    const cadastro = await super.add(payload);

    return await super.getById(cadastro.id, ['endereco']);
  }

  async getById(id) {
    return await super.getById(id);
  }
}

module.exports = CadastroService;
