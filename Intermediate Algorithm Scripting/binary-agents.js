function binaryAgent(str) {
  let binaryArray = str.split(' ');
  let charArray = binaryArray.map(i => 
    String.fromCharCode(String(parseInt(i, 2)))
  );
  return charArray.join('');
}
