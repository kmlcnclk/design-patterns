"use strict";
// Somut Visitor
class ConcreteVisitor {
    visitElementA(element) {
        console.log("ElementA üzerinde işlem yapılıyor.");
    }
    visitElementB(element) {
        console.log("ElementB üzerinde işlem yapılıyor.");
    }
}
// Somut ElementA
class ElementA {
    accept(visitor) {
        visitor.visitElementA(this);
    }
}
// Somut ElementB
class ElementB {
    accept(visitor) {
        visitor.visitElementB(this);
    }
}
// Nesne Yapısı
class ObjectStructure {
    constructor() {
        this.elements = [];
    }
    addElement(element) {
        this.elements.push(element);
    }
    accept(visitor) {
        for (const element of this.elements) {
            element.accept(visitor);
        }
    }
}
// Kullanım
const objectStructure = new ObjectStructure();
objectStructure.addElement(new ElementA());
objectStructure.addElement(new ElementB());
const visitor = new ConcreteVisitor();
objectStructure.accept(visitor);
