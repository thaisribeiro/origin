const randomico = require("randomico");

function inteiro(options) {
    return Math.floor(randomico() * (options.max - options.min + 1) + options.min);
}

exports = {
    inteiro: inteiro,
}