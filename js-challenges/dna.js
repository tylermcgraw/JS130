class DNA {
  constructor(sequence) {
    this.sequence = sequence;
  }
  hammingDistance(sequenceToCompare) {
    let distance = 0;
    for (let idx = 0; idx < Math.min(
      this.sequence.length, sequenceToCompare.length); idx += 1) {
      if (this.sequence[idx] !== sequenceToCompare[idx]) distance += 1;
    }
    return distance;
  }
}

module.exports = DNA;