function convertToRoman(num) {

  let romanNumeralElements = {
    thousands: {
      symb: 'M',
      count: Math.floor((num % 10000)/1000)   
    },
    fivehundreds: {
      symb: 'D',
      baseCount: Math.floor((num % 1000)/100),
      get count() {
        return (this.baseCount >= 5 && this.baseCount < 9) ? 1 : 0
      } 
    },
    hundreds: {
      symb: 'C',
      baseCount: Math.floor((num % 1000)/100),
      get count () {
        return (this.baseCount >= 5) ? this.baseCount - 5 : this.baseCount
      }
    },
    fifties: {
      symb: 'L',
      baseCount: Math.floor((num % 100)/10),
      get count() {
        return (this.baseCount >= 5 && this.baseCount < 9) ? 1 : 0
      } 
    },
    tens: {
      symb: 'X',
      baseCount: Math.floor((num % 100)/10),
      get count () {
        return (this.baseCount >= 5) ? this.baseCount - 5 : this.baseCount
      }
    },
    fives: {
      symb: 'V',
      baseCount: num % 10,
      get count() {
        return (this.baseCount >= 5 && this.baseCount < 9) ? 1 : 0
      }
    },
    ones: {
      symb: 'I',
      baseCount: num % 10,
      get count() {
        return (this.baseCount >= 5) ? this.baseCount - 5 : this.baseCount
      }
    }
  };

  let romanNumeral = '';

  for(let item in romanNumeralElements) {
    if(romanNumeralElements[item].baseCount === 4) {
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
    } else if(romanNumeralElements[item].baseCount === 9) {
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
      for(let i = 0; i < romanNumeralElements[item].count; i++) {
        romanNumeral += romanNumeralElements[item].symb;
      }
    }
  }

  return romanNumeral;
}