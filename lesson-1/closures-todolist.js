// eslint-disable-next-line max-lines-per-function
function makeList() {
  let list = [];
  return (item) => {
    if (item === undefined) {
      if (list.length === 0) {
        console.log("The list is empty.");
      } else {
        list.forEach(listItem => console.log(listItem));
      }
    } else {
      let idx = list.indexOf(item);
      if (idx === -1) {
        list.push(item);
        console.log(`${item} added!`);
      } else {
        list.splice(idx, 1);
        console.log(`${item} removed!`);
      }
    }
  };
}

let list = makeList();
list();
list("make breakfast");
list("read book");
list();
list("make breakfast");
list();