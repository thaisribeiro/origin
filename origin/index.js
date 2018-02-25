const inteiro = require('../origin/utils/inteiro')
const numero = require('../origin/utils/numero')
const cpfCnpj = require('../origin/utils/cpf_cnpj')
const natural = require('../origin/utils/natural')
const massa = require('../origin/app/dados/massa')

module.exports = function () {
  const objeto = {}

  objeto.int = inteiro
  objeto.natural = natural
  objeto.numero = numero
  objeto.cpf = cpfCnpj.cpf
  objeto.cnpj = cpfCnpj.cnpj
  objeto.cidade = massa.cidade
  objeto.email = massa.email
  objeto.empresas = massa.empresas
  objeto.estado = massa.estado
  objeto.nome = massa.nome
  objeto.pais = massa.pais
  objeto.telefone = massa.telefone
  objeto.string = massa.string

  return objeto
}
