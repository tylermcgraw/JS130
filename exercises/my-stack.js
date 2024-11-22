function newStack() {
  let elements = [];
  const stack = {
    push(element) {
      elements.push(element);
    },
    pop() {
      return elements.pop();
    },
    printStack() {
      console.log("---Stack---");
      elements.forEach(element => console.log(element));
    }
  };
  return stack;
}

let myStack = newStack();
myStack.push("Tyler");
myStack.push("Virginia");
myStack.push("Aria");
myStack.push("Mila");
myStack.printStack();
myStack.pop();
myStack.pop();
myStack.printStack();