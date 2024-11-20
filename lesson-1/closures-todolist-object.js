function makeList() {
  let items = [];
  return {
    add(item) {
      items.push(item);
      console.log(`${item} added!`);
    },
    remove(item) {
      items.splice(items.indexOf(item), 1);
      console.log(`${item} removed!`);
    },
    list() {
      if (items.length === 0) {
        console.log("The list is empty.");
      } else {
        items.forEach(item => console.log(item));
      }
    },
  };
}

let list = makeList();
list.list();
list.add("make breakfast");
list.add("read book");
list.list();
list.remove("make breakfast");
list.list();