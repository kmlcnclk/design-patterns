"use strict";
// Concrete Iterator
class ConcreteIterator {
    constructor(collection) {
        this.position = 0;
        this.collection = collection;
    }
    hasNext() {
        return this.position < this.collection.length;
    }
    next() {
        if (this.hasNext()) {
            return this.collection[this.position++];
        }
        else {
            throw new Error("No more elements");
        }
    }
}
// Concrete Aggregate
class ConcreteAggregate {
    constructor() {
        this.items = [];
    }
    addItem(item) {
        this.items.push(item);
    }
    createIterator() {
        return new ConcreteIterator(this.items);
    }
}
// Kullanım
const collection = new ConcreteAggregate();
collection.addItem("Item 1");
collection.addItem("Item 3");
collection.addItem("Item 2");
const iterator = collection.createIterator();
while (iterator.hasNext()) {
    console.log(iterator.next());
}
