function pairElement(str) {

  let basePairs = [];

  for (let i = 0; i < str.length; i++) {
    switch (str[i]) {
      case 'G':
        basePairs.push(['G','C']);
        break;
      case 'C':
        basePairs.push(['C','G']);
        break;
      case 'A':
        basePairs.push(['A','T']);
        break;
      case 'T':
        basePairs.push(['T','A']);
    }
  }

  return basePairs;
}