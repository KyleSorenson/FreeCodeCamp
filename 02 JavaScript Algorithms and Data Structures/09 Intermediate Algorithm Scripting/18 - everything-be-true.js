// My unassisted, original solution to this problem.

// Seems the main function of this excercize is just
// to raise awareness about "truthy" and "falsey"
// values. Algorithm does nothing except test each
// value in the collection associated with
// a key of name "pre." Demonstrates that
// items like "0", "null", "", and "NaN" all
// return false.

// NOTABLE CONCEPTS: Truthy and Falsey Values

function truthCheck(collection, pre) {
  for(let i = 0; i < collection.length; i++) {
    if (!collection[i][pre]) {
      return false;
    }
  }
  return true;
}