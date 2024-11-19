"use strict";

// 1
// 1, 2, 3, 4

// 2
// 1, 1, 1, 1

// 3
// 1, 2, 1, 2

// 4
// 1, 2, 1, 2

// 5
function makeMultipleLister(num) {
  return function() {
    for (let multiple = num; multiple < 100; multiple += num) {
      console.log(multiple);
    }
  };
}
let lister = makeMultipleLister(17);
lister();
/*
17
34
51
68
85
*/

// 6
let total = 0;
function add(num) {
  total += num;
  console.log(total);
}
function subtract(num) {
  total -= num;
  console.log(total);
}
add(1);       // 1
add(42);      // 43
subtract(39); // 4
add(6);       // 10

// 7
// result = 6
// result = 6 + 24 = 30
// result = 30 + 120 = 150

// 8
function later(func, arg) {
  return function() {
    func(arg);
  };
}
const logger = message => console.log(message);
let logWarning = later(logger, "The system is shutting down!");
logWarning(); // The system is shutting down!

// 9
function later2(func, arg1) {
  return function(arg2) {
    func(arg1, arg2);
  };
}
const notify = function(message, when) {
  console.log(`${message} in ${when} minutes!`);
};

let shutdownWarning = later2(notify, "The system is shutting down");
shutdownWarning(30); // The system is shutting down in 30 minutes!

// 10
function bind(context, func) {
  return () => func.call(context);
}

let obj = {};
let boundFunc = bind(obj, function() {
  this.foo = "bar";
});

boundFunc();
console.log(obj); // { foo: 'bar' }