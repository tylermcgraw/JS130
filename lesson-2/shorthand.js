// 1
/*
function foo(bar, qux, baz) {
  return {
    bar: bar,
    baz: baz,
    qux: qux,
  };
}

// 2
function foo() {
  return {
    bar: function() {
      console.log("bar");
    },
    qux: function(arg1) {
      console.log("qux");
      console.log(arg1);
    },
    baz: function(arg1, arg2) {
      console.log("baz");
      console.log(arg1);
      console.log(arg2);
    },
  };
}

// 3
function foo(one, two, three) {
  return {
    bar: one,
    baz: two,
    qux: three,
  };
}

let bar = foo(1, 2, 3).bar;
let baz = foo(1, 2, 3).baz;
let qux = foo(1, 2, 3).qux;

// 4
function foo(arr) {
  return [
    arr[2],
    5,
    arr[0],
  ];
}

let array = [1, 2, 3];
let result = foo(array);
let bar = result[0];
let qux = result[1];
let baz = result[2];

// 5
function product(num1, num2, num3) {
  return num1 * num2 * num3;
}

let array = [2, 3, 5];
let result = product(array[0], array[1], array[2]);

// 6
function product() {
  let numbers = Array.from(arguments);
  return numbers.reduce((total, number) => total * number);
}

let result = product(2, 3, 4, 5);

// 7
const { foo, ...rest } = { foo: 42, bar: 3.1415, qux: "abc" };
console.log(foo);         // 42
console.log(rest);        // { bar: 3.1415, qux: 'abc' }

// 8
const obj = {
  first: "I am the first",
  second: "I am the second",
  third: [1, 2, 3],
  rest: { a: 'a', b: 'b' },
};

const first = obj.first;
const second = obj.second;
const rest = {
  third: obj.third,
  rest: obj.rest
};

// 9
const arr = [1, 2, 3];
const obj = { a: 'a', b: 'b', c: 'c' };
let [ a, b, c ] = arr;
let { d, e, f } = obj;

// 10
const arr = [1, 2, 3];
let [ first, ...arr2 ] = arr;

// 11
const arr = [1, 2, 3];
let [ , second ] = arr;

// 12
const obj = { a: 'a', b: 'b', c: 'c' };
let { c: tail, ...obj2 } = obj;
console.log(tail, obj2); // c { a: 'a', b: 'b' }

// 13
function sum() {
  return [...arguments].reduce((sum, num) => sum + num);
}

// 14
console.log(sum(1, 2, 3));
console.log(sum(...[1, 2, 3]));

// 15
// the destructuring assignment converts the array into a list of numbers
const arr = [1, 2, 3];

function prod(num1, num2) {
  return num1 * num2;
}

prod(...arr);

// 16
// line 7 uses spread syntax to turn obj into a list of properties, then
// creates an object that has those same properties, essentially making
// copy of obj. line 8 uses rest syntax to create 3 new variables that
// have the same names and values of the 3 obj properties

// 17
// return {type: animalType, age, colors};
*/

// 18
function fullName(...names) {
  let [ first, ...middle ] = names;
  let last = middle.pop();
  middle.sort();
  return {first, middle, last};
}

console.log(fullName("Tyler", "Austin", "Virginia", "Loke", "McGraw"));