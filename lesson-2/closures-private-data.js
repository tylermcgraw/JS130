function makeCounterLogger(start) {
  return end => {
    if (start < end) {
      for (let counter = start; counter <= end; counter += 1) {
        console.log(counter);
      }
    } else {
      for (let counter = start; counter >= end; counter -= 1) {
        console.log(counter);
      }
    }
  };
}

let countlog = makeCounterLogger(5);
countlog(8);
/*
5
6
7
8
*/

countlog(2);
/*
5
4
3
2
*/