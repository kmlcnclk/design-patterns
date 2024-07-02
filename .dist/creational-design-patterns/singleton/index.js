"use strict";
class Singleton {
    constructor() {
        this.aa = 0;
    }
    static getInstance() {
        if (!Singleton.instance) {
            Singleton.instance = new Singleton();
        }
        return Singleton.instance;
    }
    someBusinessLogic() {
        console.log("Singleton instance is doing some business logic.");
    }
    setAa(aa) {
        this.aa = aa;
    }
    getAa() {
        return this.aa;
    }
}
const singleton1 = Singleton.getInstance();
singleton1.setAa(10);
const singleton2 = Singleton.getInstance();
console.log(singleton1 === singleton2); // true
console.log(singleton1, singleton2);
