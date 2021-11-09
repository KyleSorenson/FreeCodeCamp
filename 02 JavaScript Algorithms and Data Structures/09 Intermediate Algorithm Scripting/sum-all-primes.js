function sumPrimes(num) {
  let allNums = [];
  
  for(let i = 2; i <= num; i++){
    allNums.push(i);
  };

  let primeSieve = function (index, arr){
    let thisNumber = allNums[index];
    allNums = allNums.filter(function(item) {
      if(item <= thisNumber) {
        return item;
      } else {
        return item % thisNumber;
      }
    });
    if(thisNumber <= Math.sqrt(num)) {
      primeSieve(index + 1, allNums);
    }
  };
  
  primeSieve(0, allNums);

  return allNums.reduce((a, b) => a + b);
}

console.log(sumPrimes(977));