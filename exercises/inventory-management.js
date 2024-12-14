const ItemManager = {
  items: [],
  create(itemName, category, quantity) {
    let item = this.createItem(itemName, category, quantity);
    if (item.notValid) return false;
    this.items.push(item);
    return true;
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
    let items = [];
    for (let item of this.items) {
      if (item.notValid || item.quantity < 1) continue;
      items.push(item);
    }
    return items;
  },
  itemsInCategory(category) {
    let items = [];
    for (let item of this.items) {
      if (item.notValid || item.category !== category) continue;
      items.push(item);
    }
    return items;
  },
  createItem(itemName, category, quantity) {
    let item = {
      SKUCode: null,
      itemName: itemName,
      category: category,
      quantity: quantity,
      notValid: false
    };
    if (!this.isValid(item)) {
      item.notValid = true;
    } else {
      item.SKUCode = this.generateSKUCode(item);
    }
    return item;
  },
  isValid(item) {
    let validName = item.itemName.replaceAll(' ', '').length >= 5;
    let validCategory = item.category.length >= 5 && !item.category.match(' ');
    let validQuantity = item.quantity !== undefined;
    return validName && validCategory && validQuantity;
  },
  generateSKUCode(item) {
    let firstThree = item.itemName.replaceAll(' ', '').substring(0, 3).toUpperCase();
    let lastTwo = item.category.substring(0, 2).toUpperCase();
    return firstThree + lastTwo;
  }
};

const ReportManager = {
  items: null,
  init(ItemManager) {
    this.items = ItemManager;
  },
  createReporter(SKUCode) {
    let thisItem;
    for (let item of this.items.items) {
      if (item.SKUCode === SKUCode) thisItem = item;
    }
    return {
      itemInfo() {
        for (let prop in thisItem) {
          console.log(`${prop}: ${thisItem[prop]}`);
        }
      }
    };
  },
  reportInStock() {
    this.items.inStock().forEach(item => console.log(item.itemName));
  }
};

ItemManager.create('basket ball', 'sports', 0);           // valid item
ItemManager.create('asd', 'sports', 0);
ItemManager.create('soccer ball', 'sports', 5);           // valid item
ItemManager.create('football', 'sports');
ItemManager.create('football', 'sports', 3);              // valid item
ItemManager.create('kitchen pot', 'cooking items', 0);
ItemManager.create('kitchen pot', 'cooking', 3);          // valid item
// returns list with the 4 valid items
// WORKS
// console.log(ItemManager.items);

ReportManager.init(ItemManager);
// logs soccer ball,football,kitchen pot
// WORKS
// ReportManager.reportInStock();

ItemManager.update('SOCSP', { quantity: 0 });
// returns list with the item objects for football and kitchen pot
// WORKS
ItemManager.inStock();
// football,kitchen pot
// WORKS
// ReportManager.reportInStock();

// returns list with the item objects for basket ball, soccer ball, and football
// WORKS
// console.log(ItemManager.itemsInCategory('sports'));

ItemManager.delete('SOCSP');
// returns list the remaining 3 valid items (soccer ball removed from list)
// WORKS
// console.log(ItemManager.items);

let kitchenPotReporter = ReportManager.createReporter('KITCO');
kitchenPotReporter.itemInfo();
// logs
// skuCode: KITCO
// itemName: kitchen pot
// category: cooking
// quantity: 3
// WORKS

ItemManager.update('KITCO', { quantity: 10 });
kitchenPotReporter.itemInfo();
// logs
// skuCode: KITCO
// itemName: kitchen pot
// category: cooking
// quantity: 10
// WORKS