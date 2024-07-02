"use strict";
class SimpleCoffee {
    cost() {
        return 5;
    }
}
class CoffeeDecorator {
    constructor(coffee) {
        this.decoratedCoffee = coffee;
    }
    cost() {
        return this.decoratedCoffee.cost();
    }
}
class MilkDecorator extends CoffeeDecorator {
    constructor(coffee) {
        super(coffee);
    }
    cost() {
        return super.cost() + 1;
    }
}
class SugarDecorator extends CoffeeDecorator {
    constructor(coffee) {
        super(coffee);
    }
    cost() {
        return super.cost() + 0.5;
    }
}
// Basit bir kahve
let myCoffee = new SimpleCoffee();
console.log(`Simple Coffee Cost: $${myCoffee.cost()}`);
// Sütlü kahve
myCoffee = new MilkDecorator(myCoffee);
console.log(`Milk Coffee Cost: $${myCoffee.cost()}`);
// Sütlü ve şekerli kahve
myCoffee = new SugarDecorator(myCoffee);
console.log(`Milk and Sugar Coffee Cost: $${myCoffee.cost()}`);
