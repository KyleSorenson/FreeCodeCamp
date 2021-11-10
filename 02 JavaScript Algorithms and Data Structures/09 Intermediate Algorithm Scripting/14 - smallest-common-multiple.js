// My original (not entirely unassisted) solution to this problem.

// I reused my prime sieve from excercize 13 to generate a (larger
// than necessary) list of prime numbers. Then, I implemented a
// prime division algorithm described at https://bit.ly/3kkaKJK
// (credit: math-only-math.com) to generate the lowest common multiple.

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


// Algorithm actually begins here
// (The above is just a fancy way of generating primes).
function smallestCommons(arr) {

  // Sorts the array from lowest to highest
  arr.sort((a, b) => a - b);
  
  // Generates a list of all numbers including and between
  // the values given by the array 
  let factors = [];
  for(let i = arr[0]; i <= arr[1]; i++){
    factors.push(i);
  }
 
  let lcmArray = [];
  let primeIndex = 0;
  
  // Loops through all primes in primeList
  while (primeIndex < PRIMES.length) {
  
    // Checks to see if any of the factors are evenly divisible by current prime
    if(factors.map(i => (i % PRIMES[primeIndex] === 0)).includes(true)) {
      
      // If yes, prime is saved to lcmArray
      lcmArray.push(PRIMES[primeIndex]);
      
      // All factors that can be evenly divided by current prime are divided and replaced
      // by the result.
      for(let i = 0; i < factors.length; i++){
        if((factors[i] % PRIMES[primeIndex]) === 0){
          factors[i] = factors[i] / PRIMES[primeIndex];
        };
      };

    // If no factors are cleanly divisible by current prime, increment to the next prime
    } else {
      primeIndex++;
    }
  };

  // Multiplies all the elements in lcmArray together and returns result
  return lcmArray.reduce((a, b) => a * b);
}