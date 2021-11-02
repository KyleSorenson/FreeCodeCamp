function steamrollArray(arr) {

  return (function recursiveRoll(thisArray, savedItems) {

    for(let i = 0; i < thisArray.length; i++) {
      if(!Array.isArray(thisArray[i])) {
        savedItems.push(thisArray[i]);
      } else {
        recursiveRoll(thisArray[i], savedItems);
      }
    }

    return savedItems;

  }(arr, []));

}