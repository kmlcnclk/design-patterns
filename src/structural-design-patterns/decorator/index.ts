interface Coffee {
  cost(): number;
}

class SimpleCoffee implements Coffee {
  cost(): number {
    return 5;
  }
}

class CoffeeDecorator implements Coffee {
  protected decoratedCoffee: Coffee;

  constructor(coffee: Coffee) {
    this.decoratedCoffee = coffee;
  }

  cost(): number {
    return this.decoratedCoffee.cost();
  }
}

class MilkDecorator extends CoffeeDecorator {
  constructor(coffee: Coffee) {
    super(coffee);
  }

  cost(): number {
    return super.cost() + 1;
  }
}

class SugarDecorator extends CoffeeDecorator {
  constructor(coffee: Coffee) {
    super(coffee);
  }

  cost(): number {
    return super.cost() + 0.5;
  }
}

// Basit bir kahve
let myCoffee: Coffee = new SimpleCoffee();
console.log(`Simple Coffee Cost: $${myCoffee.cost()}`);

// Sütlü kahve
myCoffee = new MilkDecorator(myCoffee);
console.log(`Milk Coffee Cost: $${myCoffee.cost()}`);

// Sütlü ve şekerli kahve
myCoffee = new SugarDecorator(myCoffee);
console.log(`Milk and Sugar Coffee Cost: $${myCoffee.cost()}`);
