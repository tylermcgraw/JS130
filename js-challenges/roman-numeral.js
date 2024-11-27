/* eslint-disable max-statements */
/* eslint-disable max-lines-per-function */
class RomanNumeral {
  static NUMERALS = {
    1: {roman: "I", subtract: 0},
    5: {roman: "V", subtract: 1},
    10: {roman: "X", subtract: 1},
    50: {roman: "L", subtract: 10},
    100: {roman: "C", subtract: 10},
    500: {roman: "D", subtract: 100},
    1000: {roman: "M", subtract: 100},
  }

  constructor(arabicNumeral) {
    this.arabicNumeral = arabicNumeral;
  }

  toRoman() {
    let builtRoman = '';
    let num = this.arabicNumeral;
    while (num > 0) {
      for (let arabic of RomanNumeral.descendingArabicNumerals()) {
        let roman = this.toBaseRoman(arabic);
        let arabicToSubtract = this.arabicToSubtract(arabic);
        while (num >= arabic) {
          builtRoman += roman;
          num -= arabic;
        }
        if (num >= arabic - arabicToSubtract) {
          builtRoman += this.toBaseRoman(arabicToSubtract);
          builtRoman += roman;
          num -= (arabic - arabicToSubtract);
        }
      }
    }
    return builtRoman;
  }

  static descendingArabicNumerals() {
    return Object.keys(RomanNumeral.NUMERALS).reverse();
  }

  toBaseRoman(arabic) {
    return RomanNumeral.NUMERALS[arabic].roman;
  }

  arabicToSubtract(arabic) {
    return RomanNumeral.NUMERALS[arabic].subtract;
  }
}

module.exports = RomanNumeral;