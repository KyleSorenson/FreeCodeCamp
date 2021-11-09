function translatePigLatin(str) {
  if(/^(A|a|E|e|I|i|O|o|U|u)/.test(str)){
    return str + 'way';
  } else if(!/A|a|E|e|I|i|O|o|U|u/.test(str)) {
    return str + 'ay';
  } else {
    let firstVowelIndex = str.match(/A|a|E|e|I|i|O|o|U|u/).index;
    let strArr = str.split('');
    let prefix = strArr.slice(0,firstVowelIndex).join('');
    let suffix = strArr.slice(firstVowelIndex).join('');
    str = suffix.concat(prefix).concat('ay');
    return str
  }
}