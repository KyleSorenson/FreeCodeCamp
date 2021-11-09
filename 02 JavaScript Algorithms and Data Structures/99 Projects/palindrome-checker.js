function palindrome(str) {
  
  // Makes str lowercase so that letters will all
  // be compared in the same case.
  let strArray = str.toLowerCase()

  // Creates an array of each individual letter
  // or number. Excludes spaces and other characters
  .match(/[a-z0-9]/g);
  
  // Tests to see if the reversed array (backwards-
  // to-forwards) is identical to the forwards-to-backwards array
  return (strArray.join('') === strArray.reverse().join('')) ? true : false
}