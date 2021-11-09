function chunkArrayInGroups(arr, size) {
  let groupArray = [];
  for (let i = 0 ; i < (arr.length / size) ; i ++){
    let skip = size * i;
    let arrCopy = [...arr];
    groupArray[i] = arrCopy.splice(skip, size);
  }
  return groupArray;
}

chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6], 3);