function rot13(str) {
  const ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  
  return str.replace(
    
    // regex that returns each letter in str (and excludes spaces and punctuation)
    /[A-Z]/g,
    
    // for every letter in str,
    // the position in the alphabet is found
    // and shifted 13 places
    // (looping from the end of the alphabet back to the beginning)
    i => ALPHABET[
      (ALPHABET.match(i).index + 13) % 26
    ]
  );
}