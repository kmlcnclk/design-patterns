// Visitor arayüzü
interface Visitor {
  visitElementA(element: ElementA): void;
  visitElementB(element: ElementB): void;
}

// Somut Visitor
class ConcreteVisitor implements Visitor {
  visitElementA(element: ElementA): void {
    console.log("ElementA üzerinde işlem yapılıyor.");
  }

  visitElementB(element: ElementB): void {
    console.log("ElementB üzerinde işlem yapılıyor.");
  }
}

// Element1 arayüzü
interface Element1 {
  accept(visitor: Visitor): void;
}

// Somut ElementA
class ElementA implements Element1 {
  accept(visitor: Visitor): void {
    visitor.visitElementA(this);
  }
}

// Somut ElementB
class ElementB implements Element1 {
  accept(visitor: Visitor): void {
    visitor.visitElementB(this);
  }
}

// Nesne Yapısı
class ObjectStructure {
  private elements: Element1[] = [];

  addElement(element: Element1): void {
    this.elements.push(element);
  }

  accept(visitor: Visitor): void {
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
