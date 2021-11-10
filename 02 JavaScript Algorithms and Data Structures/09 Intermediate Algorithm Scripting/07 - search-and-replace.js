// My unassisted, original solution to this problem.

// Simple alogrithm that does the bulk of the work 
// by calling the replace() method. A few checks 
// are run beforehand to determine if the word being
// replaced (before) or the word replacing (after)
// are capitalized. If there is a mismatch, "after"
// is modified to match "before."

function myReplace(str, before, after) {
  let beforeIsCapitalized = /^[A-Z]/.test(before);
  let afterIsCapitalized = /^[A-Z]/.test(after);

  if (beforeIsCapitalized) {
    if (!afterIsCapitalized) {
      after = after[0].toUpperCase().concat(after.slice(1));
    }
  } else {
    if (afterIsCapitalized) {
      after = after.toLowerCase();
    }
  }
  
  return str.replace(before, after);
}