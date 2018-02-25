
function random() {
    return Math.random();
}

function sample(arr) {
    var min = 0;
    var max = arr.length - 1;
    return arr[Math.random(min, max)];
}

function removeAcentos(str){
    return str.replace(/[^0-9a-z]/gi, '');
}

module.exports = {
    random: random,
    sample: sample,
    removeAcentos: removeAcentos
}
  