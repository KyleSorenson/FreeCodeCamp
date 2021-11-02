function dropElements(arr, func) {

  let arrFax = [...arr];
  let i = 0;

  while(!func(arrFax[i]) && arrFax.length > 0){
    arrFax.shift();
    console.log(arrFax);
  }

  return arrFax;
}