function getIndexToIns(arr, num) {
  arr.sort((a,b) => a-b);
  let returnIndex = 0;
  for (let i = 0 ; i < arr.length ; i++) {
    console.log(
`num: ${num}
index : ${i}
value: ${arr[i]}`
      )
    if ( num === arr[i] || num < arr[i] ) {    
      returnIndex = i;
      console.log(i);
      break;   
    } else {
      returnIndex = arr.length;
    }
  console.log('-----');
  }
  return returnIndex;
}

console.log(getIndexToIns([2, 5, 10], 15))