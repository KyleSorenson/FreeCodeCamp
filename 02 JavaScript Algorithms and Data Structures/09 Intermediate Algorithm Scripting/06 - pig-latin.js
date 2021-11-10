// My unassisted, original solution to this problem.

function translatePigLatin(str) {
  
  // Tests to see if str begins with a vowel.
  if(/^(A|a|E|e|I|i|O|o|U|u)/.test(str)){
    
    // If yes, adds "way" to the end of str.
    return str + 'way';
  
  // Tests to see if now vowels are present in str.
  } else if(!/A|a|E|e|I|i|O|o|U|u/.test(str)) {
    
    // If yes, adds "ay" to the end of str.
    return str + 'ay';
  } else {
    
    // Locates the index of the first vowel in str.
    let firstVowelIndex = str.match(/A|a|E|e|I|i|O|o|U|u/).index;
    
    // Splits str into a character array.
    let strArr = str.split('');
    
    // Slices off the letters prior to the first vowel.
    let prefix = strArr.slice(0,firstVowelIndex).join('');
    
    // Slices of the letters after and includding the first vowel.
    let suffix = strArr.slice(firstVowelIndex).join('');
    
    // Swaps the suffix and prefix and adds "ay" to the end.
    str = suffix.concat(prefix).concat('ay');
    return str
  }
}

// Mostly identical to FCC Solution 2:
// Uses ".substr()"" instead of ".slice()""

// function translatePigLatin(str) {
//   // Create variables to be used
//   var pigLatin = "";
//   var regex = /[aeiou]/gi;

//   // Check if the first character is a vowel
//   if (str[0].match(regex)) {
//     pigLatin = str + "way";
//   } else if (str.match(regex) === null) {
//     // Check if the string contains only consonants
//     pigLatin = str + "ay";
//   } else {
//     // Find how many consonants before the first vowel.
//     var vowelIndice = str.indexOf(str.match(regex)[0]);

//     // Take the string from the first vowel to the last char
//     // then add the consonants that were previously omitted and add the ending.
//     pigLatin = str.substr(vowelIndice) + str.substr(0, vowelIndice) + "ay";
//   }

//   return pigLatin;
// }