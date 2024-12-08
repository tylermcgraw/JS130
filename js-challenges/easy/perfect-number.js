function classify(num) {
  if (num < 1) {
    throw new Error("Non-positive numbers not allowed");
  }
  let aliquotSum = 0;
  for (let divisor = 1; divisor < num; divisor += 1) {
    if (num % divisor === 0) {
      aliquotSum += divisor;
    }
  }
  if (aliquotSum > num) return "abundant";
  else if (aliquotSum < num) return "deficient";
  return "perfect";
}

module.exports = {classify};