// The same algorithm as v1, but formatted to be easier
// to read. Also, transformed into one single return object
// through method chaining

// NOTABLE CONCEPTS: Human-readable method chaining

function binaryAgent(str) {
  return str.split(' ')
  .map(i => 
    String.fromCharCode(
      String(parseInt(i, 2))
    )
  )
  .join('');
}

// Very similar to FCC's solution 3
// (Their order of operations is slightly
// different. Also, they cleverly employ
// the spread operator and avoid having to
// 'join' the split string back together):

// function binaryAgent(str) {
//   return String.fromCharCode(
//     ...str.split(" ").map(function(char) {
//       return parseInt(char, 2);
//     })
//   );
// }