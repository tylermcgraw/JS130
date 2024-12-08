/* eslint-disable max-statements */
/* eslint-disable max-lines-per-function */
class BeerSong {
  static TEMPLATE = "X bottles of beer on the wall, X bottles of beer.\n" +
                   "Take one down and pass it around, Y bottles of beer " +
                   "on the wall.\n";
  static TWO = "2 bottles of beer on the wall, 2 bottles of beer.\n" +
    "Take one down and pass it around, 1 bottle of beer on the wall.\n";
  static ONE = "1 bottle of beer on the wall, 1 bottle of beer.\n" +
    "Take it down and pass it around, no more bottles of beer on the wall.\n";
  static ZERO = "No more bottles of beer on the wall, no more bottles of beer.\n" +
    "Go to the store and buy some more, 99 bottles of beer on the wall.\n";
  static lyrics() {
    return BeerSong.verses(99, 0);
  }
  static verse(idx) {
    switch (idx) {
      case 0:
        return BeerSong.ZERO;
      case 1:
        return BeerSong.ONE;
      case 2:
        return BeerSong.TWO;
      default:
        let verse = BeerSong.TEMPLATE.replaceAll('X', String(idx));
        let replaceY = idx === 1 ? "no more" : String(idx - 1);
        return verse.replaceAll('Y', replaceY);
    }
  }
  static verses(start, end) {
    let buildVerse = '';
    for (let idx = start; idx >= end; idx -= 1) {
      buildVerse += BeerSong.verse(idx);
      if (idx !== end) buildVerse += '\n';
    }
    return buildVerse;
  }
}

module.exports = BeerSong;