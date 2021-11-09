function primeList(num) {
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

  return allNums;
}

const PRIMES = primeList(100);

function smallestCommons(arr) {
  
  arr.sort((a, b) => a - b);
  let factors = [];
  
  for(let i = arr[0]; i <= arr[1]; i++){
    factors.push(i);
  }
  
  let lcmArray = [];
  let primeIndex = 0;
  
  while (primeIndex < PRIMES.length) {
    if(factors.map(i => (i % PRIMES[primeIndex] === 0)).includes(true)) {
      lcmArray.push(PRIMES[primeIndex]);
      for(let i = 0; i < factors.length; i++){
        if((factors[i] % PRIMES[primeIndex]) === 0){
          factors[i] = factors[i] / PRIMES[primeIndex];
        };
      };
    } else {
      primeIndex++;
    }
  };

  return lcmArray.reduce((a, b) => a * b);
}