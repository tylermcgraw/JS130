class Anagram {
  constructor(word) {
    this.word = word;
  }
  match(words) {
    let letterCount = this.getLetterCount(this.word);
    return words.filter(anagram => {
      if (this.word.toLowerCase() === anagram.toLowerCase()) return false;
      let anagramLetterCount = this.getLetterCount(anagram);
      let longerWord = this.word.length > anagram.length
        ? letterCount : anagramLetterCount;
      for (let char in longerWord) {
        if (letterCount[char] !== anagramLetterCount[char]) return false;
      }
      return true;
    });
  }
  getLetterCount(word) {
    let count = {};
    for (let char of word.toLowerCase()) {
      count[char] = count[char] + 1 || 1;
    }
    return count;
  }
}

module.exports = Anagram;