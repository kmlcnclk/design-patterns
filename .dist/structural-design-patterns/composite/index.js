"use strict";
// Leaf (Yaprak) Sınıfı
class Circle {
    draw() {
        console.log("Drawing a Circle");
    }
}
// Leaf (Yaprak) Sınıfı
class Square {
    draw() {
        console.log("Drawing a Square");
    }
}
// Composite (Bileşik) Sınıfı
class CompositeGraphic {
    constructor() {
        this.childGraphics = [];
    }
    add(graphic) {
        this.childGraphics.push(graphic);
    }
    remove(graphic) {
        const index = this.childGraphics.indexOf(graphic);
        if (index !== -1) {
            this.childGraphics.splice(index, 1);
        }
    }
    draw() {
        for (const graphic of this.childGraphics) {
            graphic.draw();
        }
    }
}
// Kullanım Örneği
const circle = new Circle();
const square = new Square();
const compositeGraphic = new CompositeGraphic();
compositeGraphic.add(circle);
compositeGraphic.add(square);
compositeGraphic.draw();
