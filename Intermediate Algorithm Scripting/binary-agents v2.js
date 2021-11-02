function binaryAgent(str) {
  return str.split(' ')
  .map(i => 
    String.fromCharCode(
      String(parseInt(i, 2))
    )
  )
  .join('');
}