function diffArray(arr1, arr2) {
  const mergedArr = [...new Set([...arr1, ...arr2])];
  const newArr = mergedArr.filter( i => !arr1.includes(i) || !arr2.includes(i) );
  return newArr;
}