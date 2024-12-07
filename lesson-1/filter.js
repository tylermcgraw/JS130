function filter(array, callback, thisArg) {
  let newArray = [];
  for (let idx = 0; idx < array.length; idx += 1) {
    if (callback.call(thisArg, array[idx], idx, array)) {
      newArray.push(array[idx]);
    }
  }
  return newArray;
}

let numbers = [1, 2, 3, 4, 5];
console.log(filter(numbers, number => number > 3)); // => [ 4, 5 ]
console.log(filter(numbers, number => number < 0)); // => []
console.log(filter(numbers, () => true));           // => [ 1, 2, 3, 4, 5 ]

let values = [1, "abc", null, true, undefined, "xyz"];
console.log(filter(values, value => typeof value === "string"));
// => [ 'abc', 'xyz' ]