function findLongestWordLength(str) {
  let regex = /\S+/g;
  let wordArray = str.match(regex);
  let longestWordLength = 0;
  let longestWord = "";
  for (let i = 0; i < wordArray.length ; i++){
    if(wordArray[i].length > longestWordLength) {
      longestWordLength = wordArray[i].length;
      longestWord = wordArray[i];
    }
  }
  return longestWord.length;
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");