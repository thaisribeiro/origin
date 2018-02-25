
function random() {
    return Math.random();
}

function sample(arr) {
    var min = 0;
    var max = arr.length - 1;
    return arr[Math.random(min, max)];
}

exports = {
    random: random,
    sample: sample
}
  