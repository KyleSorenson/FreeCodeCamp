// My unassisted, original solution to this problem.

// Uses a number of nested methods, which doesn't make
// it very human-readable, but the sequence of events is
// 1) The binaryArray is split into an array of bytes
// 2) Each byte is translated from binary to decimal
// and the resulting value used as the UTF-16 code that
// gets fed fed into "fromCharCode", returning a letter.
// The full string of characters is then joined together
// and returned.

function binaryAgent(str) {
  let binaryArray = str.split(' ');
  let charArray = binaryArray.map(i => 
    String.fromCharCode(String(parseInt(i, 2)))
  );
  return charArray.join('');
}
