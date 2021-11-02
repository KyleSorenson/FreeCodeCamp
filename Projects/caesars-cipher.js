function rot13(str) {
  const ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  return str.replace(
    /[A-Z]/g,
    i => ALPHABET[
      (ALPHABET.match(i).index + 13) % 26
    ]
  );
}