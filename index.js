function numBottlesFrom(number) {
  if (isNaN(number)) return 0;
  var bottlesCanBePurchased = Math.floor(number / 2);
  var numBottlesFromCaps = Math.floor(bottlesCanBePurchased / 4);
  var numBottlesFromEmpties = Math.floor(bottlesCanBePurchased / 2);

  return bottlesCanBePurchased + numBottlesFromEmpties + numBottlesFromCaps;
}

console.log(numBottlesFrom(Number(process.argv[2])))

module.exports = numBottlesFrom;
