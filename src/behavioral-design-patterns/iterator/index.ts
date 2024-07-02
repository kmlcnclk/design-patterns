// Iterator arayüzü
interface Iteratora<T> {
  hasNext(): boolean;
  next(): T;
}

// Concrete Iterator
class ConcreteIterator<T> implements Iteratora<T> {
  private collection: T[];
  private position: number = 0;

  constructor(collection: T[]) {
    this.collection = collection;
  }

  public hasNext(): boolean {
    return this.position < this.collection.length;
  }

  public next(): T {
    if (this.hasNext()) {
      return this.collection[this.position++];
    } else {
      throw new Error("No more elements");
    }
  }
}

// Aggregate arayüzü
interface Aggregate<T> {
  createIterator(): Iteratora<T>;
}

// Concrete Aggregate
class ConcreteAggregate<T> implements Aggregate<T> {
  private items: T[] = [];

  public addItem(item: T): void {
    this.items.push(item);
  }

  public createIterator(): Iteratora<T> {
    return new ConcreteIterator<T>(this.items);
  }
}

// Kullanım
const collection = new ConcreteAggregate<string>();
collection.addItem("Item 1");
collection.addItem("Item 2");
collection.addItem("Item 3");

const iterator = collection.createIterator();

while (iterator.hasNext()) {
  console.log(iterator.next());
}
