function palindrome(str) {
  let strArray = str.toLowerCase().match(/[a-z0-9]/g);
  return (strArray.join('') === strArray.reverse().join('')) ? true : false
}