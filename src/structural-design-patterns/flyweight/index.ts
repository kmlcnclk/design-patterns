// Flyweight sınıfı
class Flyweight {
  private sharedState: string;

  constructor(sharedState: string) {
    this.sharedState = sharedState;
  }

  public operation(uniqueState: string): void {
    console.log(
      `Shared State: ${this.sharedState}, Unique State: ${uniqueState}`
    );
  }
}

// FlyweightFactory sınıfı
class FlyweightFactory {
  private flyweights: { [key: string]: Flyweight } = {};

  public getFlyweight(sharedState: string): Flyweight {
    if (!(sharedState in this.flyweights)) {
      this.flyweights[sharedState] = new Flyweight(sharedState);
    }
    return this.flyweights[sharedState];
  }

  public listFlyweights(): void {
    const count = Object.keys(this.flyweights).length;
    console.log(`FlyweightFactory: I have ${count} flyweights:`);
    for (const key in this.flyweights) {
      console.log(key);
    }
  }
}

// Kullanım
const factory = new FlyweightFactory();

const flyweight1 = factory.getFlyweight("Shared State 1");
const flyweight2 = factory.getFlyweight("Shared State 2");
const flyweight3 = factory.getFlyweight("Shared State 1");

flyweight1.operation("Unique State A");
flyweight2.operation("Unique State B");
flyweight3.operation("Unique State C");

factory.listFlyweights();
