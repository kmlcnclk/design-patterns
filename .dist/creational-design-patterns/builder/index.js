"use strict";
// class Director {
//   public constructForHouse(builder: Builder) {
//     builder.buildPartA();
//     builder.buildPartB();
//   }
//   public constructForHouseWithGarage(builder: Builder) {
//     builder.buildPartA();
//     builder.buildPartB();
//     builder.buildPartC(true);
//   }
// }
// interface Builder {
//   buildPartA(): void;
//   buildPartB(): void;
//   buildPartC?(hasGarage: boolean): void;
// }
// class ConcreteBuilder1 implements Builder {
//   private product: HProduct = new HProduct();
//   public buildPartA() {
//     this.product.add("PartA1");
//   }
//   public buildPartB() {
//     this.product.add("PartB1");
//   }
//   public getResult(): HProduct {
//     return this.product;
//   }
// }
// class ConcreteBuilder2 implements Builder {
//   private product: Product = new Product();
//   public buildPartA() {
//     this.product.add("PartA2");
//   }
//   public buildPartB() {
//     this.product.add("PartB2");
//   }
//   public buildPartC(hasGarage: boolean) {
//     this.product.add("PartC1" + hasGarage);
//   }
//   public getResult(): Product {
//     return this.product;
//   }
// }
// class HProduct {
//   private parts: string[] = [];
//   public add(part: string) {
//     this.parts.push(part);
//   }
//   public getParts() {
//     return this.parts;
//   }
// }
// class Product {
//   private parts: string[] = [];
//   public add(part: string) {
//     this.parts.push(part);
//   }
//   public getParts() {
//     return this.parts;
//   }
// }
// // ex: this is a house
// const builder1 = new ConcreteBuilder1();
// // ex: this is a house with garage
// const builder2 = new ConcreteBuilder2();
// const director = new Director();
// const a = director.constructForHouse(builder1);
// console.log(builder1.getResult().getParts());
// const b = director.constructForHouseWithGarage(builder2);
// console.log(builder2.getResult().getParts());
