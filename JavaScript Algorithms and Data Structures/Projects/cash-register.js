function checkCashRegister(price, cash, cid) {

  // Initializes a copy of the cid array (to be used as a return object later)  
  let initialCID = []; 
  cid.map(i => initialCID.push([...i]));
  let change = [];

  // Object constructor that will be used to generate currency objects in REGISTER below
  let Denomination = function (value, cidIndex) {
    this.value = value;
    this.cidIndex = cidIndex;
    this.count = Math.round(cid[cidIndex][1] / value)
  };

  // REGISTER includes a count of each denomination (total number of coins or bills), not just the total cash value
  let REGISTER = {
    "ONE HUNDRED": new Denomination(100, 8),
    "TWENTY": new Denomination(20, 7),
    "TEN": new Denomination(10, 6),
    "FIVE": new Denomination(5, 5),
    "ONE": new Denomination(1, 4),
    "QUARTER": new Denomination(0.25, 3),
    "DIME": new Denomination(0.10, 2),
    "NICKLE": new Denomination(0.05, 1),
    "PENNY": new Denomination(0.01, 0)
  }

  // Checks to make sure the customer has enough cash to pay for the item (beyond the scope of FCC's tests)
  if (cash > price) {

    // Tracks the change that remains after each bill or coin has been tendered to customer
    let remainingChange = Math.round((cash - price) * 100)/100;

    // Loops through each denomination provided by the CID array, starting with the largest denominations
    for (let i = 8; i >= 0; i--) {
      
      // Loops through each denomination object in REGISTER
      for (let DENOMINATION in REGISTER) {
        
        // Selects denomination object, starting with the largest denomination, then cascades through all the rest
        if (REGISTER[DENOMINATION].cidIndex === i) {
          
          // Checks if denomination larger than the change owed (in which case it should not be tendered)
          if (remainingChange >= REGISTER[DENOMINATION].value) {
            
            // Tenders bills or coins to customer until their value exceeds the change owed, or the bills/coins in the register run out 
            let tenderedQty = 0
            while (
                (REGISTER[DENOMINATION].value * (tenderedQty+1)) <= remainingChange
                && REGISTER[DENOMINATION].count > 0
              ) {
              tenderedQty++;
              REGISTER[DENOMINATION].count--;
            }

            // Calculates the cash value of change tendered from the number of bills or coins distributed to customer           
            let tenderedValue = tenderedQty * REGISTER[DENOMINATION].value;
            
            // Saves the cash value of each bill or coin tendered to the customer in the change array
            change.push([DENOMINATION, tenderedValue]);
            
            // Deducts the cash value of the change tendered from the remaining change owed
            remainingChange = Math.round((remainingChange - tenderedValue )* 100)/100;

            // Updates CID array to reflect current amount of cash in register
            cid[REGISTER[DENOMINATION].cidIndex][1] = REGISTER[DENOMINATION].count * REGISTER[DENOMINATION].value;
          
          };
        };
      };
    };

  // Defaults status to "OPEN"
  let status = "OPEN";

  // Checks to see if change is still owed
  // If so, changes status to "INSUFFICIENT FUNDS" and returns an empty change array
  if (remainingChange > 0) {
    status = "INSUFFICIENT_FUNDS";
    change = [];
    return {
      status, change
    }
  }

  // Checks to see if cid array is empty
  // If so, changes status to "CLOSED" and returns the original cid array ( the initalCID array created at the beginning )
  if(cid.every(i => i[1] === 0)) {
    status = "CLOSED";
    change = initialCID;
    return {
      status, change
    }
  }

  // Standard return
  // Status is "OPEN", and an array of all the change tendered is given
  return {
    status, change
  }

  } else {
    // Message that returns if customer doesn't have enough cash to cover their purchase
    return "CUSTOMER DOES NOT HAVE ENOUGH CASH TO PURCHASE.";
  }

}