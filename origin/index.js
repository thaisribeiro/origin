'use strict';

const {
    inteiro,
    numero,
    cpf_cnpj,
    randomico,
    utils
} = require('./utils');

const {
    massa
} = require('./massa');

exports = function() {
    const objeto = {};
    objeto.inteiro = inteiro;
    objeto.natural = natural;
    objeto.numero = numero;
    objeto.cpf = cpf_cnpj.cpf;
    objeto.cnpj = cpf_cnpj.cnpj;
    objeto.cidade = massa.cidade;
    objeto.email = massa.email;
    objeto.empresas = massa.empresas;
    objeto.estado = massa.estado;
    objeto.nome = massa.nome;
    objeto.pais = massa.pais;
    objeto.telefone = massa.telefone;
    objeto.string = massa.string;

    return objeto;
}