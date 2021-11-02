function frankenSplice(arr1, arr2, n) {
  let newArr = [...arr2];
  newArr.splice(n,0,...arr1);
  console.log(newArr);
  return newArr;
}

frankenSplice([1, 2, 3], [4, 5], 1);