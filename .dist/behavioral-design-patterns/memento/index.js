"use strict";
// Originator
class Originator {
    constructor() {
        this._state = "";
    }
    setState(state) {
        this._state = state;
    }
    getState() {
        return this._state;
    }
    saveStateToMemento() {
        return new Memento(this._state);
    }
    getStateFromMemento(memento) {
        this._state = memento.getState();
    }
}
// Memento
class Memento {
    constructor(state) {
        this.state = state;
    }
    getState() {
        return this.state;
    }
}
// Caretaker
class Caretaker {
    constructor() {
        this.mementoList = [];
    }
    add(state) {
        this.mementoList.push(state);
    }
    get(index) {
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
