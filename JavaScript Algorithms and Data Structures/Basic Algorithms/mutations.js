function mutation(arr) {
  
  let firstWord = arr[0];
  let secondWord = arr[1];
  let firstWordArray = [...new Set(firstWord.toLowerCase().split(''))];
  let secondWordArray = [...new Set(secondWord.toLowerCase().split(''))];

  let matchCount = 0;
  let mut = false;

  for(let i in secondWordArray) {
    for(let j in firstWordArray) {
      if( secondWordArray[i] === firstWordArray[j]) {
        matchCount++;
        console.log(
`${secondWordArray[i]} and ${firstWordArray[j]} match!
match count: ${matchCount}`);
      }
    }
  }

  if (matchCount === secondWordArray.length) {
      mut = true;
  }

  console.log(mut);

  return mut;
}

mutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"]);