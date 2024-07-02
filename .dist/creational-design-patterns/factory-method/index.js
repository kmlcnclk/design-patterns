"use strict";
// abstract class FactoryMethod {
//   abstract createProduct(): Product;
// }
// interface Product {
//   operation(): string;
// }
// class ConcreteFactoryA extends FactoryMethod {
//   createProduct(): Product {
//     return new ConcreteProductA();
//   }
// }
// class ConcreteFactoryB extends FactoryMethod {
//   createProduct(): Product {
//     return new ConcreteProductB();
//   }
// }
// class ConcreteProductA implements Product {
//   operation(): string {
//     return "Product A";
//   }
// }
// class ConcreteProductB implements Product {
//   operation(): string {
//     return "Product B";
//   }
// }
// const factoryA = new ConcreteFactoryA();
// const productA = factoryA.createProduct();
// console.log(productA.operation()); // Product A
// const factoryB = new ConcreteFactoryB();
// const productB = factoryB.createProduct();
// console.log(productB.operation()); // Product B
