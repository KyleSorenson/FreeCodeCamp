function checkCashRegister(price, cash, cid) {
  let totalChange = cash - price;
  
  let denominations = {
    penny: {
      value: 0.01,
      cidIndex: 0,
      get count () { return cid[this.cidIndex][1] / this.value }
    },
    nickle: {
      value: 0.05,
      cidIndex: 1,
      get count () { return cid[this.cidIndex][1] / this.value }
    },
    dime: {
      value: 0.1,
      cidIndex: 2,
      get count () { return cid[this.cidIndex][1] / this.value }
    },
    quarter: {
      value: 0.25,
      cidIndex: 3,
      get count () { return cid[this.cidIndex][1] / this.value }
    },
    one: {
      value: 1,
      cidIndex: 4,
      get count () { return cid[this.cidIndex][1] / this.value }
    },
    five: {
      value: 5,
      cidIndex: 5,
      get count () { return cid[this.cidIndex][1] / this.value }
    },
    ten: {
      value: 10,
      cidIndex: 6,
      get count () { return cid[this.cidIndex][1] / this.value }
    },
    twenty: {
      value: 20,
      cidIndex: 7,
      get count () { return cid[this.cidIndex][1] / this.value }
    },
    hundred: {
      value: 100,
      cidIndex: 8,
      get count () { return cid[this.cidIndex][1] / this.value }
    }
  }

  //console.log(denominations.penny.count)
  for (let i in denominations) {
    console.log(denominations[i].count);
  };
  return change;
}

checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);