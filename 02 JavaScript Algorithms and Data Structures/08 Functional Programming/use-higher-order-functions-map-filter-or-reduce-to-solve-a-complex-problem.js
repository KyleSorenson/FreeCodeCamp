const squareList = arr => {
  // Only change code below this line
  return arr.filter(i => (i > 0 && i % 1 === 0)).map(i => i**2);
  // Only change code above this line
};

const squaredIntegers = squareList([-3, 4.8, 5, 3, -3.2]);
console.log(squaredIntegers);