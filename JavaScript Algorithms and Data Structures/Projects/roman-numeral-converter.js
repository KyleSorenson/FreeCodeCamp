function convertToRoman(num) {

  // Object that partitions num into biquinary values ("ones", "fives", etc)
  // and groups the tally for each with its corresponding roman symbol ("I", "V").
  // Because the latin system is essentially decimal, but the symbol changes
  // in increments of five, a "placeValue" property is also specified. This
  // corresponds the standard "ones", "tens", "hundreds" position of our modern
  // decimal system. Values lower than five are assigned one symbol per placeValue.
  // Values of 5 or higher are assigned a separate symbol.
  let romanNumeralElements = {
    thousands: {
      symb: 'M',
      tally: Math.floor((num % 10000)/1000)   
    },
    fivehundreds: {
      symb: 'D',
      placeValue: Math.floor((num % 1000)/100),
      get tally() {
        return (this.placeValue >= 5 && this.placeValue < 9) ? 1 : 0
      } 
    },
    hundreds: {
      symb: 'C',
      placeValue: Math.floor((num % 1000)/100),
      get tally () {
        return (this.placeValue >= 5) ? this.placeValue - 5 : this.placeValue
      }
    },
    fifties: {
      symb: 'L',
      placeValue: Math.floor((num % 100)/10),
      get tally() {
        return (this.placeValue >= 5 && this.placeValue < 9) ? 1 : 0
      } 
    },
    tens: {
      symb: 'X',
      placeValue: Math.floor((num % 100)/10),
      get tally () {
        return (this.placeValue >= 5) ? this.placeValue - 5 : this.placeValue
      }
    },
    fives: {
      symb: 'V',
      placeValue: num % 10,
      get tally() {
        return (this.placeValue >= 5 && this.placeValue < 9) ? 1 : 0
      }
    },
    ones: {
      symb: 'I',
      placeValue: num % 10,
      get tally() {
        return (this.placeValue >= 5) ? this.placeValue - 5 : this.placeValue
      }
    }
  };

  let romanNumeral = '';

  // Loops through each item in romanNumeralElements, from highest to lowest
  // and adds the specified tally of each symbol to the end of the 
  // "romanNumeral" string
  for(let item in romanNumeralElements) {
    
    // Handles the two "subtractive notation" cases (4 and 9),
    // where the first symbol subtracts from the second symbol.
    if(romanNumeralElements[item].placeValue === 4) {
      switch (item) {
        case 'ones':
          romanNumeral += 'IV';
          break;
        case 'tens':
          romanNumeral += 'XL';
          break;
        case 'hundreds':
          romanNumeral += 'CD';
          break;
      }
    } else if(romanNumeralElements[item].placeValue === 9) {
      switch (item) {
        case 'ones':
          romanNumeral += 'IX';
          break;
        case 'tens':
          romanNumeral += 'XC';
          break;
        case 'hundreds':
          romanNumeral += 'CM';
          break;
      }
    } else {
      for(let i = 0; i < romanNumeralElements[item].tally; i++) {
        romanNumeral += romanNumeralElements[item].symb;
      }
    }
  }

  return romanNumeral;
}