const numero = require('../utils/numero')
const inteiro = require('../utils/inteiro')
const cpfCnpj = require('../utils/cpf_cnpj')
const massa = require('./dados/massa')

module.exports = {
  inteiro: inteiro,
  numero: numero,
  cpf: cpfCnpj.cpf,
  cnpj: cpfCnpj.cnpj,
  cidade: massa.cidade,
  email: massa.email,
  empresas: massa.empresas,
  estado: massa.estado,
  nome: massa.nome,
  pais: massa.pais,
  telefone: massa.telefone,
  string: massa.string
}
