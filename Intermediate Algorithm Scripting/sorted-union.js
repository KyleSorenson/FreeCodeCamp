function uniteUnique(arr) {
  let allNumbers = [];
  for(let i = 0; i < arguments.length; i++) {
    allNumbers = allNumbers.concat(arguments[i]);
  }
  return [...new Set(allNumbers)];
}