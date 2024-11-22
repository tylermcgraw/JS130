function myBind(func, context, ...args1) {
  return (...args2) => func.call(context, ...args1.concat(args2));
}

const context = {
  x: 42,
  getX: function (...args) {
    [args].forEach(arg => console.log(arg));
    return this.x;
  },
};

const unboundGetX = context.getX;
console.log(unboundGetX("a", "b", "c")); // The function gets invoked at the global scope
// Expected output: undefined

const boundGetX = myBind(unboundGetX, context, 4, 5, 6);
console.log(boundGetX(1, 2, 3));
// Expected output: 42
