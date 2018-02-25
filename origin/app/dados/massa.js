const randomico = require('../../utils/randomico');
import {
  cidade,
  email,
  empresas,
  endereco,
  estado,
  nome,
  pais,
  telefone,
  string
} from('../../massa');

module.exports = {
  cidade: randomico.sample(cidade),
  email: randomico.sample(email),
  empresas: randomico.sample(empresas),
  estado: randomico.sample(estado),
  nome: randomico.sample(nome),
  pais: randomico.sample(pais),
  telefone: randomico.sample(telefone),
  string: randomico.sample(string)
}
