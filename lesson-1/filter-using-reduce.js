function filter(array, callback, thisArg) {
  return array.reduce((accumulator, value, index, array) => {
    if (callback(value, index, array)) {
      accumulator.push(value);
    }
    return accumulator;
  }, [], thisArg);
}

let numbers = [1, 2, 3, 4, 5];
console.log(filter(numbers, number => number > 3)); // => [ 4, 5 ]
console.log(filter(numbers, number => number < 0)); // => []
console.log(filter(numbers, () => true));           // => [ 1, 2, 3, 4, 5 ]

let values = [1, "abc", null, true, undefined, "xyz"];
console.log(filter(values, value => typeof value === "string"));
// => [ 'abc', 'xyz' ]