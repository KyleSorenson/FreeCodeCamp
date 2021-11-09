function sumFibs(num, arr = [], thisNumber = 1, prevNumber = 0){
  arr.push(thisNumber);
  let nextNumber = thisNumber + prevNumber;
  if (nextNumber <= num) {
    sumFibs(num, arr, nextNumber, thisNumber)
  };
  return arr.filter(a => a % 2 ).reduce((a, b) => a + b);
}

// function fibonacciArray(maxNumber, arr = [], thisNumber = 1, prevNumber = 0){
//   arr.push(thisNumber);
//   let nextNumber = thisNumber + prevNumber;
//   if (nextNumber < maxNumber) {
//     fibonacciArray(maxNumber, arr, nextNumber, thisNumber)
//   }
//   return arr

// };