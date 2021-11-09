function countOnline(usersObj) {
  // Only change code below this line
  let num = 0;
  //console.log(Object.getOwnPropertyNames(usersObj.Alan));
  for (let user in usersObj) {
    console.log('user: ' + user);
    console.log('is online: ' + usersObj[user].online);
    if(usersObj[user].online) {num += 1};
    console.log('num: ' + num);
  };
  return num;
  // Only change code above this line
}

let users = {
  Alan: {
    online: false
  },
  Jeff: {
    online: true
  },
  Sarah: {
    online: false
  }
};

console.log(countOnline(users));