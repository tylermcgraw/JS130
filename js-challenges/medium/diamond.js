function makeDiamond(letter) {
  let letterCode = letter.charCodeAt(0);
  let numLetters = getLetters(letter);
  let numRows = (numLetters * 2) - 1;
  let line = '';
  let diamond = '';
  for (let row = 0; row < numRows; row += 1) {
    letter = String.fromCharCode(
      letterCode - Math.abs(row - numLetters + 1));
    let leadingSpaces = numLetters - getLetters(letter);
    let middleSpaces = (getLetters(letter) * 2) - 3;
    line += ' '.repeat(leadingSpaces) + letter;
    if (middleSpaces > 0) line += ' '.repeat(middleSpaces) + letter + ' '.repeat(leadingSpaces);
    else line += ' '.repeat(numRows - line.length);
    console.log(line);
    diamond += line + '\n';
    line = '';
  }
  return diamond;
}

function getLetters(letter) {
  return letter.charCodeAt(0) - 'A'.charCodeAt(0) + 1;
}

makeDiamond('E');

module.exports = {makeDiamond};