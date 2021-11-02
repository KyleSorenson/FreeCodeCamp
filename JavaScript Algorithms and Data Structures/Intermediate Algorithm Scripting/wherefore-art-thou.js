function whatIsInAName(collection, source) {
  const arr = [];
  // Only change code below this line
  for (let j in collection) {
    let hasAllItems = true;
    for (let i in source) {
      if (!collection[j].hasOwnProperty(i)) {
        hasAllItems = false;
      }
    }
    if (hasAllItems) {
      let hasSameValues = true;
      for (let i in source) {
        if (collection[j][i] !== source[i]) {
          hasSameValues = false;
        }
      }
      if (hasSameValues) {
        arr.push(collection[j]);
      }
    }
  }
  // Only change code above this line
  return arr;
}