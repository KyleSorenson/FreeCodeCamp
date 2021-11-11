// My unassisted, original solution to this problem.

// Uses a method chain to find all alphabetic contiguous character strings.
// that are either lowercase or start with a capital letter, transform them
// to lowercase, and joing them with a hyphen.

function spinalCase(str) {
  return str.match(/([A-Z]|[a-z])[a-z]+/g).map(i => i.toLowerCase()).join('-');
}

// FCC's regex is slightly different than mine. It locates the transition
// between a string of lowercase letters and an upper case letter. Also,
// "replace()" is used in favor of match

// FCC Solution 2:

// function spinalCase(str) {
//   // Replace low-upper case to low-space-uppercase
//   str = str.replace(/([a-z])([A-Z])/g, "$1 $2");
//   // Split on whitespace and underscores and join with dash
//   return str
//     .toLowerCase()
//     .split(/(?:_| )+/)
//     .join("-");
// }

// FCC's Solution 3 is extremely simple and does almost all the work
// by writing the corrrect regex, which finds every instance of a 
// space, underscore, or uppercase letter

// function spinalCase(str) {

//   return str
//     .split(/\s|_|(?=[A-Z])/)
//     .join("-")
//     .toLowerCase();
// }