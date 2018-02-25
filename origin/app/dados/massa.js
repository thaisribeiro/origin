const randomico = require('../../utils/randomico')
const cidade = require('../../massa/cidade')
const email = require('../../massa/email')
const empresas = require('../../massa/empresas')
const endereco = require('../../massa/endereco')
const estado = require('../../massa/estado')
const nome = require('../../massa/nome')
const pais = require('../../massa/pais')
const telefone = require('../../massa/telefone')
const string = require('../../massa/string')

function cidades() {
  return randomico.sample(cidade)
}

function emails() {
  return randomico.sample(email)
}

function empresa() {
  console.log("Empresa", randomico.sample(empresas))
  return randomico.sample(empresas)
}

function estados() {
  randomico.sample(estado)
}

function nomes() {
  return randomico.sample(nome)
}

function paises() {
  return randomico.sample(pais)
}

function telefones() {
  return randomico.sample(telefone)
}

function strings() {
  return randomico.sample(string)
}

function enderecos() {
  return randomico.sample(endereco)
}

module.exports = {
  cidade: cidades,
  email: emails,
  empresas: empresa,
  estado: estados,
  nome: nomes,
  pais: paises,
  telefone: telefones,
  string: strings,
  endereco: enderecos
}
