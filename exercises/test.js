var name = "Tyler";

function Cat(nameIn) {
  name = nameIn;
}
Cat.prototype.getName = function() {
  return name;
};
Cat.prototype.meow = function() {
  console.log(`${this.getName()} says meow!`);
};

let aria = new Cat("Aria");
aria.meow();

let mila = new Cat("Mila");
mila.meow();