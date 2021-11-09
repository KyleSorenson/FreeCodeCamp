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

