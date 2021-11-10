// My unassisted, original solution to this problem.

// Defines an ALPHABET constant, which contains all
// letters in the alphabet in order. The first character
// in str is located in ALPHABET and it's index is returned.
// Each subsequent character in str is then compared against
// each subsequent character in ALPHABET. If the characters
// are ever disoverd not to match, then the deviant character
// in str is returned.

function fearNotLetter(str) {
  const ALPHABET = 'abcdefghijklmnopqrstuvwxyz';
  let startingIndex = ALPHABET.match(str[0]).index;
  for (let i = 0; i < str.length; i++) {
    if (ALPHABET[i + startingIndex] != str[i] ) {
      return ALPHABET[i + startingIndex];
    };
  }
}