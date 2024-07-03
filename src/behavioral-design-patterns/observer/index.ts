interface Observer {
  update(message: string): void;
}

class Subject {
  private observers: Observer[] = [];
  private state: string = "";

  public addObserver(observer: Observer): void {
    this.observers.push(observer);
  }

  public removeObserver(observer: Observer): void {
    const index = this.observers.indexOf(observer);
    if (index > -1) {
      this.observers.splice(index, 1);
    }
  }

  public setState(state: string): void {
    this.state = state;
    this.notifyObservers();
  }

  private notifyObservers(): void {
    for (const observer of this.observers) {
      observer.update(this.state);
    }
  }
}

class ConcreteObserver implements Observer {
  private name: string;

  constructor(name: string) {
    this.name = name;
  }

  public update(message: string): void {
    console.log(`${this.name} received message: ${message}`);
  }
}

// Kullanım örneği
const subject = new Subject();

const observer1 = new ConcreteObserver("Observer 1");
const observer2 = new ConcreteObserver("Observer 2");

subject.addObserver(observer1);
subject.addObserver(observer2);

subject.setState("State changed!");
