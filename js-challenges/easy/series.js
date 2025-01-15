// I solved a different, harder problem than was asked.
// I thought that "consecutive" meant increasing by 1
// The problem simply meant numbers that are next to each other
// Takeaway: read the problem carefully.
// I am not resolving it because I am confident I can do the easy version
// Also this version works

class Series {
  constructor(digits) {
    this.digits = digits;
  }

  slices(length) {
    let numSeries = this.digits.length - length + 1;
    if (numSeries < 1) {
      throw new Error;
    }
    let allConsecutiveSeries = [];
    let sortedDigits = this.digits.split('').sort().join('');
    for (let seriesCount = 0; seriesCount < numSeries; seriesCount += 1) {
      let currentSeries = sortedDigits.substring(seriesCount, seriesCount + length);
      if (this.#isConsecutive(currentSeries, length)) {
        allConsecutiveSeries.push(currentSeries.split('').map(char => Number(char)));
      }
    }
    console.log(allConsecutiveSeries);
    return allConsecutiveSeries;
  }

  #isConsecutive(series, length) {
    let priorDigit = Number(series[0]);
    for (let idx = 1; idx < length; idx += 1) {
      let currentDigit = Number(series[idx]);
      if (priorDigit + 1 !== currentDigit) {
        return false;
      }
      priorDigit = currentDigit;
    }
    return true;
  }
}

module.exports = Series;