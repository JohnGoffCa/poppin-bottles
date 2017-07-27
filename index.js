function numBottlesFrom(number) {
  if (isNaN(number)) return 0;
  var bottlesCanBePurchased = Math.floor(number / 2);
  var numBottlesFromCaps = Math.floor(bottlesCanBePurchased / 4);
  var numBottlesFromEmpties = Math.floor(bottlesCanBePurchased / 2);

  return {
    bottles: bottlesCanBePurchased,
    fromEmpties: numBottlesFromEmpties,
    fromCaps: numBottlesFromCaps,
    emptiesLeft: bottlesCanBePurchased % 2,
    capsLeft: bottlesCanBePurchased % 4,
  }
}

console.log(numBottlesFrom(Number(process.argv[2])))

module.exports = numBottlesFrom;
