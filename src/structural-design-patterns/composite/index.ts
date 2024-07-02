// Component (Bileşen) Arayüzü
interface Graphic {
  draw(): void;
}

// Leaf (Yaprak) Sınıfı
class Circle implements Graphic {
  draw(): void {
    console.log("Drawing a Circle");
  }
}

// Leaf (Yaprak) Sınıfı
class Square implements Graphic {
  draw(): void {
    console.log("Drawing a Square");
  }
}

// Composite (Bileşik) Sınıfı
class CompositeGraphic implements Graphic {
  private childGraphics: Graphic[] = [];

  add(graphic: Graphic): void {
    this.childGraphics.push(graphic);
  }

  remove(graphic: Graphic): void {
    const index = this.childGraphics.indexOf(graphic);
    if (index !== -1) {
      this.childGraphics.splice(index, 1);
    }
  }

  draw(): void {
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
