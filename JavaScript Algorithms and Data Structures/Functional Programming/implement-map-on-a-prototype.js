// The global variable
var s = [23, 65, 98, 5];



/*Array.prototype.myMap = function(callback) {
  var newArray = [];
  // Only change code below this line

  // Only change code above this line
  return newArray;
};*/

Array.prototype.myMap = function(callback) {
  var newArray = [];
  // Only change code below this line
  for(let i = 0; i < this.length; i++) {
    newArray.push(
      callback(this[i])
    );
  }
  // Only change code above this line
  return newArray;
};

var new_s = s.myMap(function(item) {
  return item * 2;
});

var newest_s = s.myMap(i => (i * 3));



//IIFE that iterates through a default array and adds 1 to each item
console.log(

  function(arr = [3,8,7]){
    let arrFax = [...arr];
    let returnArr = [];
    for(let i = 0; i < arrFax.length; i++) {
      returnArr.push(
        arrFax[i] + 1
      );
    }
    return returnArr;
  }()

);

const addOne = (x) => (x+1);

//IIFE that iterates through a default array and performs a default callback function on each item
console.log(

  function(arr = [3,8,7], callback = addOne){
    let arrFax = [...arr];
    let returnArr = [];
    for(let i = 0; i < arrFax.length; i++) {
      returnArr.push(
        callback(arrFax[i])
      );
    }
    return returnArr;
  }()

);

//named function that iterates through an array and performs callback function on each item
const myMap = function(arr, callback){
  let arrFax = [...arr];
  let returnArr = [];
  for(let i = 0; i < arrFax.length; i++) {
    returnArr.push(
      callback(arrFax[i])
    );
  }
  return returnArr;
}

let testArray = [2,4,5,7];
let testCallback = (x) => (x*2);
console.log(myMap(testArray, testCallback ))