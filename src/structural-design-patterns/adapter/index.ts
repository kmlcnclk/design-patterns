// Eski sistemin arayüzü
interface OldSystem {
  oldRequest(): void;
}

// Eski sistemin sınıfı
class OldSystemImpl implements OldSystem {
  oldRequest(): void {
    console.log("Old system request");
  }
}

// Yeni sistemin arayüzü
interface NewSystem {
  newRequest(): void;
}

// Adapter sınıfı
class Adapter implements NewSystem {
  private oldSystem: OldSystem;

  constructor(oldSystem: OldSystem) {
    this.oldSystem = oldSystem;
  }

  newRequest(): void {
    this.oldSystem.oldRequest();
  }
}

// Kullanım
const oldSystem: OldSystem = new OldSystemImpl();
const adapter: NewSystem = new Adapter(oldSystem);
adapter.newRequest(); // "Old system request" yazdırır
