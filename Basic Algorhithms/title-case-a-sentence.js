function titleCase(str) {
  //let regex = /^\w|\s\w/g;
  str = str.toLowerCase();
  console.log(str);
  str = str.replace(/^\w|\s\w/g, ( x => x.toUpperCase() ));
  console.log(str);
  return str;
}

titleCase("I'm a little tea pot");