// My unassisted, original solution to this problem.
// Uses a simple switch and for loop to traverse
// each character in str, determine its pair,
// and push an array of the combined base pair
// to the return array.

function pairElement(str) {

  let basePairs = [];

  for (let i = 0; i < str.length; i++) {
    switch (str[i]) {
      case 'G':
        basePairs.push(['G','C']);
        break;
      case 'C':
        basePairs.push(['C','G']);
        break;
      case 'A':
        basePairs.push(['A','T']);
        break;
      case 'T':
        basePairs.push(['T','A']);
    }
  }

  return basePairs;
}

// Nearly identical to FCC's solution 1:

// function pairElement(str) {
//   // Return each strand as an array of two elements, the original and the pair.
//   var paired = [];

//   // Function to check with strand to pair.
//   var search = function(char) {
//     switch (char) {
//       case "A":
//         paired.push(["A", "T"]);
//         break;
//       case "T":
//         paired.push(["T", "A"]);
//         break;
//       case "C":
//         paired.push(["C", "G"]);
//         break;
//       case "G":
//         paired.push(["G", "C"]);
//         break;
//     }
//   };

//   // Loops through the input and pair.
//   for (var i = 0; i < str.length; i++) {
//     search(str[i]);
//   }

//   return paired;
// }