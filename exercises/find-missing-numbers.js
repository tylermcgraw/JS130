function missing(arr) {
  let newArr = [];
  for (let idx = arr[0]; idx <= arr[arr.length - 1]; idx += 1) {
    if (!arr.includes(idx)) {
      newArr.push(idx);
    }
  }
  return newArr;
}

// eslint-disable-next-line id-length
let p = console.log;

p(missing([-3, -2, 1, 5]));   // [-1, 0, 2, 3, 4]
p(missing([1, 2, 3, 4]));     // []
p(missing([1, 5]));           // [2, 3, 4]
p(missing([6]));              // []