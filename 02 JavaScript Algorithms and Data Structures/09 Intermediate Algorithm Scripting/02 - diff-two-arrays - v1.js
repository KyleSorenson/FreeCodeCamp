// first attempt at this problem that was abandoned

function diffArray(arr1, arr2) {
  var arr1Fax = [...arr1.sort()];
  var arr2Fax = [...arr2.sort()];
  var sameArray = [];
  var diffArray = [];
  var remainderArray = []

  let index1 = 0;
  let index2 = 0;
  for(let i = 0; i < Math.max(arr1.length, arr2.length); i++) {
    if (arr1Fax[index1] || arr2Fax[index2]) {
      if (arr1Fax[index1] === arr2Fax[index2]) {
        sameArray.push(...arr1Fax.slice(index1,index1+1));
      } else {
        diffArray.push(...arr2Fax.slice(index2, index2+1));
        index1--
      }
    }
    index1++;
    index2++;
  }

  remainderArray.push(...arr1Fax.slice(index1));
  diffArray = diffArray.concat(remainderArray);

  return diffArray;
}