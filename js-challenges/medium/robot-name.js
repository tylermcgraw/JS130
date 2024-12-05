class Robot {
  static usedNames = [];
  constructor() {
    this.robotName = this.getNewName();
    Robot.usedNames.push(this.robotName);
  }
  getNewName() {
    let name;
    do {
      name = `${this.getRandomUpper()}${this.getRandomUpper()}${this.getRandomDigit()}${this.getRandomDigit()}${this.getRandomDigit()}`;
    }
    while (Robot.usedNames.includes(name));
    return name;
  }
  getRandomUpper() {
    return String.fromCharCode(
      Math.floor((Math.random() * 26)) + "A".charCodeAt(0)
    );
  }
  getRandomDigit() {
    return Math.floor(Math.random() * 10);
  }
  name() {
    return this.robotName;
  }
  reset() {
    Robot.usedNames.splice(Robot.usedNames.indexOf(this.robotName));
    this.robotName = this.getNewName();
    Robot.usedNames.push(this.robotName);
  }
}

module.exports = Robot;