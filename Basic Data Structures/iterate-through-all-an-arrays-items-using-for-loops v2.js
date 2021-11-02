function filteredArray(arr, elem) {
  let newArr = [];
  // Only change code below this line
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i].indexOf(elem));
    if (arr[i].indexOf(elem) < 0) {newArr.push(arr[i])};
    console.log(newArr);
  }
  // Only change code above this line
  return newArr;
}

console.log(filteredArray([["amy", "beth", "sam"], ["dave", "sean", "peter"]], "peter"));