// FCC's solutions all involve the String.fromCharCode() and
// CharCodeAt() methods. Rather than defining an alphabet
// variable, they just use ASCII codes.

// FCC Solution 2:

function fearNotLetter(str) {
  let currCharCode = str.charCodeAt(0);
  let missing = undefined;

  str
    .split("")
    .forEach(letter => {
      if (letter.charCodeAt(0) === currCharCode) {
        currCharCode++;
      } else {
        missing = String.fromCharCode(currCharCode);
      }
    });

  return missing;
}

// FCC Solution 3 is also quite clever.
// It just checks to see if the char code for each
// character in str is more than a difference of
// 1 from the previous character.

function fearNotLetter(str) {
  for (let i = 1; i < str.length; ++i) {
    if (str.charCodeAt(i) - str.charCodeAt(i - 1) > 1) {
      return String.fromCharCode(str.charCodeAt(i - 1) + 1);
    }
  }
}