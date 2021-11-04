function checkCashRegister(price, cash, cid) {
  
  let initialCID = []; 
  cid.map(i => initialCID.push([...i]));
  let change = [];

  let REGISTER = {
    "ONE HUNDRED": {
      value: 100,
      cidIndex: 8,
      //how do I add an initializing function to an object that allows me to write values later?
      get count () { return Math.round(cid[this.cidIndex][1] / this.value) }
    },
    "TWENTY": {
      value: 20,
      cidIndex: 7,
      get count () { return Math.round(cid[this.cidIndex][1] / this.value) }
    },
    "TEN": {
      value: 10,
      cidIndex: 6,
      get count () { return Math.round(cid[this.cidIndex][1] / this.value) }
    },
    "FIVE": {
      value: 5,
      cidIndex: 5,
      get count () { return Math.round(cid[this.cidIndex][1] / this.value) }
    },
    "ONE": {
      value: 1,
      cidIndex: 4,
      get count () { return Math.round(cid[this.cidIndex][1] / this.value) }
    },
    "QUARTER": {
      value: 0.25,
      cidIndex: 3,
      get count () { return Math.round(cid[this.cidIndex][1] / this.value) }
    },
    "DIME": {
      value: 0.1,
      cidIndex: 2,
      get count () { return Math.round(cid[this.cidIndex][1] / this.value) }
    },
    "NICKLE": {
      value: 0.05,
      cidIndex: 1,
      get count () { return Math.round(cid[this.cidIndex][1] / this.value) }
    },
    "PENNY": {
      value: 0.01,
      cidIndex: 0,
      get count () { return Math.round(cid[this.cidIndex][1] / this.value) }
    }
  }

  if (cash > price) {

    let remainingChange = Math.round((cash - price) * 100)/100;
    // console.log ("Remaining Change: " + remainingChange);

    for (let i = 8; i >= 0; i--) {
      for (let DENOMINATION in REGISTER) {
        if (REGISTER[DENOMINATION].cidIndex === i) {
          if (remainingChange >= REGISTER[DENOMINATION].value) {

            // console.log("Quantity of " + DENOMINATION + ": " + REGISTER[DENOMINATION].count);
            
            let tenderedQty = 0
            let remainingCount = REGISTER[DENOMINATION].count;
            while (
                (REGISTER[DENOMINATION].value * (tenderedQty+1)) <= remainingChange
                && remainingCount > 0
              ) {
              tenderedQty++;
              remainingCount--;
            }

            // console.log("Quantity Tendered: " + tenderedQty);
            // console.log("Remaining " + DENOMINATION + " Count: " + remainingCount);
            
            let tenderedValue = tenderedQty * REGISTER[DENOMINATION].value;
            // console.log("Value Tendered: " + tenderedValue);

            change.push([DENOMINATION, tenderedValue]);
            
            remainingChange = Math.round((remainingChange - tenderedValue )* 100)/100;
            // console.log("Remaining Change: " + remainingChange);

            cid[REGISTER[DENOMINATION].cidIndex][1] = remainingCount * REGISTER[DENOMINATION].value;
            
            // console.log(cid);
            // console.log(change);
          
          };
        };
      };
    };

  let status = "OPEN";

  if (remainingChange > 0) {
    status = "INSUFFICIENT_FUNDS";
    change = [];
    return {
      status, change
    }
  }

  if(cid.every(i => i[1] === 0)) {
    status = "CLOSED";
    change = initialCID;
    return {
      status, change
    }
  }

  return {
    status, change
  }

  } else {
    return "CUSTOMER DOES NOT HAVE ENOUGH CASH TO PURCHASE.";
  }

}