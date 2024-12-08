class Octal {
  constructor(num) {
    this.num = num;
  }
  toDecimal() {
    if (this.num.match(/[^0-7]/g)) return 0;
    let numDigits = this.num.length;
    return this.num.split('').reduce((decimalValue, octalDigit, index) => {
      return decimalValue + (octalDigit * (8 ** (numDigits - index - 1)));
    }, 0);
  }
}

module.exports = Octal;