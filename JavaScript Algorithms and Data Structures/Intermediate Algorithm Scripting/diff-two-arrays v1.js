// first attempt at this problem that was abandoned

function diffArray(arr1, arr2) {
  var arr1Fax = [...arr1.sort()];
  var arr2Fax = [...arr2.sort()];
  var sameArray = [];
  var diffArray = [];
  var remainderArray = []
  console.log(arr1Fax);
  console.log(arr2Fax);

  let index1 = 0;
  let index2 = 0;
  for(let i = 0; i < Math.max(arr1.length, arr2.length); i++) {
    //console.log(`index1: ${index1}, index2: ${index2}`)
    if (arr1Fax[index1] || arr2Fax[index2]) {
      //console.log(`1st Value: ${arr1Fax[index1]}, 2nd Value: ${arr2Fax[index2]}`)
      if (arr1Fax[index1] === arr2Fax[index2]) {
        sameArray.push(...arr1Fax.slice(index1,index1+1));
        //console.log('sameArray: ' + sameArray);
      } else {
        diffArray.push(...arr2Fax.slice(index2, index2+1));
        //console.log('diffArray: ' + diffArray);
        index1--
      }
    }
    index1++;
    index2++;
    /*console.log(`
    `)*/
  }

  console.log('sameArray: ' + sameArray);
  console.log('diffArray: ' + diffArray);
  remainderArray.push(...arr1Fax.slice(index1));
  console.log('remainderArray: ' + remainderArray);

  diffArray = diffArray.concat(remainderArray);
  console.log('diffArray: ' + diffArray);

  return diffArray;
}