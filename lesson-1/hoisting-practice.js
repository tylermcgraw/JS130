/* eslint-disable vars-on-top */
/* eslint-disable no-use-before-define */
// 1
// Hello
// When a function has the same name as a var, the var gets discarded
// Wrong, it should be Bye. Apparently just the "var" gets discarded, not
// the rest of the variable declaration

// 2
// undefined
// Hello
// Goodbye
// 2
// foo is hoisted above the for loop since vars have function scope, not
// block scope, and has a value of undefined.

// 3
bar();

function bar() {
  console.log("foo!");
}

// 4
// NaN

// 5
function foo(condition) {
  let bar, qux;
  console.log(bar);

  qux = 0.5772;

  if (condition) {
    qux = 3.1415;
    console.log(qux);
  } else {
    bar = 24;

    let xyzzy = function() {
      let qux = 2.7183;
      console.log(qux);
    };

    console.log(qux);
    console.log(xyzzy());
  }

  qux = 42;
  console.log(qux);
}

foo(true);
foo(false);
/*
undefined
3.1415
42
undefined
0.5772
2.7183
undefined
42
*/

// 6
function Pet(name, image) {
  this.name = name;
  this.image =  image;
}

let Image;
var catImage;
var pudding;

Pet.prototype.walk = function() {
  console.log(`${this.name} is walking.`);
};

Image = class {
  constructor(file) {
    this.file = file;
  }
};

catImage = new Image("cat.png");
pudding = new Pet("Pudding", catImage);
pudding.walk();