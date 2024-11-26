class Triangle {
  constructor(side1, side2, side3) {
    this.side1 = side1;
    this.side2 = side2;
    this.side3 = side3;
    if (this.hasNegativeSide() || this.violatesTriangleInequality()) {
      throw new Error("invalid triangle");
    }
  }
  kind() {
    if (this.side1 === this.side2 && this.side1 === this.side3) {
      return "equilateral";
    } else if (this.side1 !== this.side2 && this.side2 !== this.side3
      && this.side3 !== this.side1) {
      return "scalene";
    }
    return "isosceles";
  }
  hasNegativeSide() {
    return this.side1 <= 0 || this.side2 <= 0 || this.side3 <= 0;
  }
  violatesTriangleInequality() {
    let max = Math.max(this.side1, this.side2, this.side3);
    return max >= (this.side1 + this.side2 + this.side3) - max;
  }
}

module.exports = Triangle;