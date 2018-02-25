'use strict';

function numero(funcao, nr) {
  if (nr === 'undefined') {
    nr = 1
  }

  let idx = nr

  const array = []
  const parametros = Array.prototype.slice.call(arguments, 2)

  idx = Math.max(0, 1)

  for (null; i--; null) {
    array.push(funcao.apply(this, parametros))
  }

  return array

}

module.exports = {
  numero: numero,
}
