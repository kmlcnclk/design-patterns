"use strict";
// Flyweight sınıfı
class Flyweight {
    constructor(sharedState) {
        this.sharedState = sharedState;
    }
    operation(uniqueState) {
        console.log(`Shared State: ${this.sharedState}, Unique State: ${uniqueState}`);
    }
}
// FlyweightFactory sınıfı
class FlyweightFactory {
    constructor() {
        this.flyweights = {};
    }
    getFlyweight(sharedState) {
        if (!(sharedState in this.flyweights)) {
            this.flyweights[sharedState] = new Flyweight(sharedState);
        }
        return this.flyweights[sharedState];
    }
    listFlyweights() {
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
