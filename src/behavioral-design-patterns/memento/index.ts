// Originator
class Originator {
  private _state: string = "";

  setState(state: string): void {
    this._state = state;
  }

  getState(): string {
    return this._state;
  }

  saveStateToMemento(): Memento {
    return new Memento(this._state);
  }

  getStateFromMemento(memento: Memento): void {
    this._state = memento.getState();
  }
}

// Memento
class Memento {
  private state: string;

  constructor(state: string) {
    this.state = state;
  }

  getState(): string {
    return this.state;
  }
}

// Caretaker
class Caretaker {
  private mementoList: Memento[] = [];

  add(state: Memento): void {
    this.mementoList.push(state);
  }

  get(index: number): Memento {
    return this.mementoList[index];
  }
}

// Kullanım
const originator = new Originator();
const caretaker = new Caretaker();

originator.setState("State #1");
originator.setState("State #2");
caretaker.add(originator.saveStateToMemento());

originator.setState("State #3");
caretaker.add(originator.saveStateToMemento());

originator.setState("State #4");

console.log("Current State: " + originator.getState());
originator.getStateFromMemento(caretaker.get(0));
console.log("First saved State: " + originator.getState());
originator.getStateFromMemento(caretaker.get(1));
console.log("Second saved State: " + originator.getState());
