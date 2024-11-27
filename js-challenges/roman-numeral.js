/* eslint-disable max-statements */
/* eslint-disable max-lines-per-function */
class RomanNumeral {
  static numerals = {
    1: "I",
    5: "V",
    10: "X",
    50: "L",
    100: "C",
    500: "D",
    1000: "M"
  }
  constructor(arabicNumeral) {
    this.arabicNumeral = arabicNumeral;
  }
  toRoman() {
    let roman = '';
    let num = this.arabicNumeral;
    while (num > 0) {
      if (num >= 900) {
        if (num < 1000) {
          roman += RomanNumeral.numerals[100];
          roman += RomanNumeral.numerals[1000];
          num -= 900;
        } else {
          roman += RomanNumeral.numerals[1000];
          num -= 1000;
        }
      } else if (num >= 400) {
        if (num < 500) {
          roman += RomanNumeral.numerals[100];
          roman += RomanNumeral.numerals[500];
          num -= 400;
        } else {
          roman += RomanNumeral.numerals[500];
          num -= 500;
        }
      } else if (num >= 90) {
        if (num < 100) {
          roman += RomanNumeral.numerals[10];
          roman += RomanNumeral.numerals[100];
          num -= 90;
        } else {
          roman += RomanNumeral.numerals[100];
          num -= 100;
        }
      } else if (num >= 40) {
        if (num < 50) {
          roman += RomanNumeral.numerals[10];
          roman += RomanNumeral.numerals[50];
          num -= 40;
        } else {
          roman += RomanNumeral.numerals[50];
          num -= 50;
        }
      } else if (num >= 9) {
        if (num < 10) {
          roman += RomanNumeral.numerals[1];
          roman += RomanNumeral.numerals[10];
          num -= 9;
        } else {
          roman += RomanNumeral.numerals[10];
          num -= 10;
        }
      } else if (num >= 4) {
        if (num < 5) {
          roman += RomanNumeral.numerals[1];
          roman += RomanNumeral.numerals[5];
          num -= 4;
        } else {
          roman += RomanNumeral.numerals[5];
          num -= 5;
        }
      } else {
        roman += RomanNumeral.numerals[1].repeat(num);
        num = 0;
      }
    }
    return roman;
  }
}

module.exports = RomanNumeral;