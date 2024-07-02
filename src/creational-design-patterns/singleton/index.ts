class Singleton {
  private aa: number = 0;
  private static instance: Singleton;
  private constructor() {}

  static getInstance(): Singleton {
    if (!Singleton.instance) {
      Singleton.instance = new Singleton();
    }
    return Singleton.instance;
  }

  public someBusinessLogic() {
    console.log("Singleton instance is doing some business logic.");
  }

  public setAa(aa: number) {
    this.aa = aa;
  }

  public getAa() {
    return this.aa;
  }
}

const singleton1 = Singleton.getInstance();
singleton1.setAa(10);
const singleton2 = Singleton.getInstance();

console.log(singleton1 === singleton2); // true

console.log(singleton1, singleton2);
