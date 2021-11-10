// My original (not entirely unassisted) solution to this problem.

// My goal was to implement a recursive function
// for Eratoshetenes' prime seive (an algorithm I've
// had previous familiarity with). After I had
// accomplished that, it was an easy task to
// sum all the primes together.

function sumPrimes(num) {
  let allNums = [];
  
  // Generates an array of all numbers
  // between 2 and num.
  for(let i = 2; i <= num; i++){
    allNums.push(i);
  };

  // Begins with 2 and filters out all subsequent
  // multiples of 2 in allNums array. Then increments
  // the next value still present in the array and
  // filters out all subsequent multiples of that
  // (i.e. "3", "5", etc...).
  let primeSieve = function (index, arr){
    let thisNumber = allNums[index];
    
    // Filters out all multiples of the value
    // at the index, not including the base
    // value itself
    allNums = allNums.filter(function(item) {
      if(item <= thisNumber) {
        return item;
      } else {
        return item % thisNumber;
      }
    });

    // Increments the index of the array
    // and terminates once the value is
    // larger than the square root of
    // num (this was a guess for how many
    // numbers needed to be run through the
    // seive. I still need to research what
    // the lowest is that would ensure the
    // seive has been completed up to a given
    // value).
    if(thisNumber <= Math.sqrt(num)) {
      primeSieve(index + 1, allNums);
    }
  };
  
  primeSieve(0, allNums);

  // Sums all the values in allNums together.
  return allNums.reduce((a, b) => a + b);
}

console.log(sumPrimes(977));

// FCC's implementation of the seive is found in solution 3
// (They do not use recursion. Instead, they opt for a "flag"
// approach: marking each index as "true" or "false." Once an
// index has been marked as false, it doesn't need to be
// checked again. My implementation maaay??? be more efficient?).
// Also: It appears I was correct about
// the square root of num being the appropriate upper bound for
// i to iterate to.

// NOTABLE CONCEPTS: Array(num + 1).fill(true) method. Creates an
// array that is one larger than num and fills it with
// "true".

// function sumPrimes(num) {
//   // Prime number sieve
//   let isPrime = Array(num + 1).fill(true);
//   // 0 and 1 are not prime
//   isPrime[0] = false;
//   isPrime[1] = false;
//   for (let i = 2; i <= Math.sqrt(num); i++) {
//     if (isPrime[i]) {
//       // i has not been marked false -- it is prime
//       for (let j = i * i; j <= num; j += i)
//         isPrime[j] = false;
//     }
//   }

//   // Sum all values still marked prime
//   return isPrime.reduce(
//     (sum, prime, index) => prime ? sum + index : sum, 0
//   );
// }