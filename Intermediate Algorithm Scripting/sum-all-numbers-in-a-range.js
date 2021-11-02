function sumAll(arr) {
  let sortedArr = [...arr].sort( (a,b) => a-b );
  let sumArr = [];
  for (let i = sortedArr[0]; i <= sortedArr[1]; i++){
    sumArr.push(i);
  }
  return sumArr.reduce((sum, index) => sum += index, 0);
}

sumAll([4, 1]);