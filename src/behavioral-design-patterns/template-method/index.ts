abstract class CoffeeTemplate {
  // Template method, final gibi davranır
  public prepareCoffee(): void {
    this.boilWater();
    this.brew();
    this.pourInCup();
    this.addCondiments();
  }

  protected abstract brew(): void;
  protected abstract addCondiments(): void;

  // Ortak adımlar
  private boilWater(): void {
    console.log("Boiling water");
  }

  private pourInCup(): void {
    console.log("Pouring into cup");
  }
}

class Espresso extends CoffeeTemplate {
  protected brew(): void {
    console.log("Brewing espresso");
  }

  protected addCondiments(): void {
    console.log("Adding sugar");
  }
}

class Latte extends CoffeeTemplate {
  protected brew(): void {
    console.log("Brewing latte");
  }

  protected addCondiments(): void {
    console.log("Adding milk and sugar");
  }
}

// Kullanım örneği
const espresso = new Espresso();
espresso.prepareCoffee();

const latte = new Latte();
latte.prepareCoffee();
