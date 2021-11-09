function bouncer(arr) {
  let newArray = []
  for (let i = 0; i < arr.length ; i++) {
    if (Boolean(arr[i]) === true) {
      newArray.push(arr[i]);
    }
  }
  return newArray;
}

bouncer([null, NaN, 1, 2, undefined]);

