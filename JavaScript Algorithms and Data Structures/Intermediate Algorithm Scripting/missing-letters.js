function fearNotLetter(str) {
  const ALPHABET = 'abcdefghijklmnopqrstuvwxyz';
  let startingIndex = ALPHABET.match(str[0]).index;
  for (let i = 0; i < str.length; i++) {
    if (ALPHABET[i + startingIndex] != str[i] ) {
      return ALPHABET[i + startingIndex];
    };
  }
}