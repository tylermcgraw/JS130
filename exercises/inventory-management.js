const ItemManager = {
  items: [],
  create(itemName, category, quantity) {
    let item = createItem(itemName, category, quantity);
    if (!item.notValid) this.items.push(item);
  },
  update(SKUCode, updates) {
    let idx = this.items.findIndex(item => item.SKUCode === SKUCode);
    for (let update in updates) {
      this.items[idx][update] = updates[update];
    }
  },
  delete(SKUCode) {
    let idx = this.items.findIndex(item => item.SKUCode === SKUCode);
    this.items.splice(idx, 1);
  },
  inStock() {
    for (let item of this.items) {
      if (item.notValid || item.quantity < 1) continue;
      console.log(item.itemName);
    }
  },
  itemsInCategory(category) {
    for (let item of this.items) {
      if (item.notValid || item.category !== category) continue;
      console.log(item.itemName);
    }
  }
};

function createItem(itemName, category, quantity) {
  let item = {
    SKUCode: null,
    itemName,
    category,
    quantity,
    notValid: false
  };
  if (itemName.length < 5 || category.length < 5) {
    item.notValid = true;
  } else {
    //
  }
  return item;
}

const ReportManager = {
  //
};

ItemManager.create('basket ball', 'sports', 0);           // valid item
ItemManager.create('asd', 'sports', 0);
ItemManager.create('soccer ball', 'sports', 5);           // valid item
ItemManager.create('football', 'sports');
ItemManager.create('football', 'sports', 3);              // valid item
ItemManager.create('kitchen pot', 'cooking items', 0);
ItemManager.create('kitchen pot', 'cooking', 3);          // valid item
// returns list with the 4 valid items
console.log(ItemManager.items.itemName);

ReportManager.init(ItemManager);
// logs soccer ball,football,kitchen pot
ReportManager.reportInStock();

ItemManager.update('SOCSP', { quantity: 0 });
// returns list with the item objects for football and kitchen pot
ItemManager.inStock();
// football,kitchen pot
ReportManager.reportInStock();

// returns list with the item objects for basket ball, soccer ball, and football
ItemManager.itemsInCategory('sports');

ItemManager.delete('SOCSP');
// returns list the remaining 3 valid items (soccer ball removed from list)
console.log(ItemManager.items);

let kitchenPotReporter = ReportManager.createReporter('KITCO');
kitchenPotReporter.itemInfo();
// logs
// skuCode: KITCO
// itemName: kitchen pot
// category: cooking
// quantity: 3

ItemManager.update('KITCO', { quantity: 10 });
kitchenPotReporter.itemInfo();
// logs
// skuCode: KITCO
// itemName: kitchen pot
// category: cooking
// quantity: 10v