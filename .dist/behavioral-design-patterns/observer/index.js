"use strict";
class Subject {
    constructor() {
        this.observers = [];
        this.state = "";
    }
    addObserver(observer) {
        this.observers.push(observer);
    }
    removeObserver(observer) {
        const index = this.observers.indexOf(observer);
        if (index > -1) {
            this.observers.splice(index, 1);
        }
    }
    setState(state) {
        this.state = state;
        this.notifyObservers();
    }
    notifyObservers() {
        for (const observer of this.observers) {
            observer.update(this.state);
        }
    }
}
class ConcreteObserver {
    constructor(name) {
        this.name = name;
    }
    update(message) {
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
