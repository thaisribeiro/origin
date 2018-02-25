const inteiro = require('./inteiro')
const {
  MAX_INT
} = require('./utils')

function natural() {
  var options = {
    min: 0,
    max: MAX_INT
  }

  return inteiro(options)
}

module.exports = {
  natural: natural
}
