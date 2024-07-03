"use strict";
class CoffeeTemplate {
    // Template method, final gibi davranır
    prepareCoffee() {
        this.boilWater();
        this.brew();
        this.pourInCup();
        this.addCondiments();
    }
    // Ortak adımlar
    boilWater() {
        console.log("Boiling water");
    }
    pourInCup() {
        console.log("Pouring into cup");
    }
}
class Espresso extends CoffeeTemplate {
    brew() {
        console.log("Brewing espresso");
    }
    addCondiments() {
        console.log("Adding sugar");
    }
}
class Latte extends CoffeeTemplate {
    brew() {
        console.log("Brewing latte");
    }
    addCondiments() {
        console.log("Adding milk and sugar");
    }
}
// Kullanım örneği
const espresso = new Espresso();
espresso.prepareCoffee();
const latte = new Latte();
latte.prepareCoffee();
