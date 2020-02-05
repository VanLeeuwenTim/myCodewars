function sumMix(x) {
  return x.map(y => parseInt(y)).reduce((a, b) => a + b, 0);
}

module.exports = sumMix;
