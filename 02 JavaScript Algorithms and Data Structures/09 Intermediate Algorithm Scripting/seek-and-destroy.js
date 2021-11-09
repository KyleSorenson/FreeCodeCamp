function destroyer(arg) {
  let destArr = [...arguments][0];
  let seekArr = [...arguments].slice(1);

  for(let i = 0; i < seekArr.length; i++) {
    destArr = destArr.filter(j => j != seekArr[i]);
  }

  return destArr;
}