// My unassisted, original solution to this problem.

// There wasn't much challenge to this excercize. I
// concatenated all arguments into a single array using
// a for loop, and the returned a Set of those numbers
// to remove duplicates

// NOTABLE CONCEPTS: use of "Set()" constructor

function uniteUnique(arr) {
  let allNumbers = [];
  for(let i = 0; i < arguments.length; i++) {
    allNumbers = allNumbers.concat(arguments[i]);
  }
  return [...new Set(allNumbers)];
}

// FCC's solution 5 is particularly efficient in it's use of
// methods. The entire operation is accomplished in a single arrow
// function. 

// NOTABLE CONCEPTS: use of .flat() method

// const uniteUnique = (...arr) => [...new Set(arr.flat())]
