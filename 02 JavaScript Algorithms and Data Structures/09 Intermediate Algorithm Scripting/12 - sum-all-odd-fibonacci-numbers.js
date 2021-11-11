// My original, unassisted solution to this problem.

// My goal was to figure out my own way of writing a recursive
// function. I found the use of "thisNumber," "nextNumber," 
// and "prevNumber" very helpful in figuring out how to
// structure the function.

function sumFibs(num, arr = [], thisNumber = 1, prevNumber = 0){
  arr.push(thisNumber);
  let nextNumber = thisNumber + prevNumber;
  if (nextNumber <= num) {
    sumFibs(num, arr, nextNumber, thisNumber)
  };
  return arr.filter(a => a % 2 ).reduce((a, b) => a + b);
}