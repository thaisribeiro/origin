const numero = require('../utils/numero');
const inteiro = require('../utils/inteiro');
const cpf_cnpj = require('../utils/cpf_cnpj');
const randomico = require('../utils/randomico');
const utils = require('../utils/utils');
const massa = require('./dados/massa');

exports = {
  inteiro: inteiro,
  numero: numero,
  cpf: cpf_cnpj.cpf,
  cnpj: cpf_cnpj.cnpj,
  cidade: massa.cidade,
  email: massa.email,
  empresas: massa.empresas,
  estado: massa.estado,
  nome: massa.nome,
  pais: massa.pais,
  telefone: massa.telefone,
  string: massa.string
}
