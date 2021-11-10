// My unassisted, original solution to this problem.

// Mostly an excercize in mathematical evaluatio.
// Values must be run through a formula that requires
// a series of operations. Made up my own way of making
// the expression more readable by splitting each 
// operation out into it's own line.

function orbitalPeriod(arr) {
  const GM = 398600.4418;
  const earthRadius = 6367.4447;
  let orbPd;
  let returnArray = [];

  for(let i = 0; i < arr.length; i++){
    orbPd = 
      Math.round(
        Math.sqrt(
          Math.pow(
            (arr[i].avgAlt + earthRadius), 3
          ) / GM
        ) * Math.PI * 2
      )
    returnArray.push({
      name: arr[i].name, 
      orbitalPeriod: orbPd
    });
  }
  return returnArray;
}
