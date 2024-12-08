class SumOfMultiples {
  constructor(...multiples) {
    this.multiples = multiples.length > 0 ? multiples : [3, 5];
  }

  to(num) {
    let sum = 0;
    for (let idx = 1; idx < num; idx += 1) {
      for (let multiple of this.multiples) {
        if (idx % multiple === 0) {
          sum += idx;
          break;
        }
      }
    }
    return sum;
  }

  static to(num) {
    let newSum = new SumOfMultiples();
    return newSum.to(num);
  }
}

module.exports = SumOfMultiples;