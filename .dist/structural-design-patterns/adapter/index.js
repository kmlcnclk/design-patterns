"use strict";
// Eski sistemin sınıfı
class OldSystemImpl {
    oldRequest() {
        console.log("Old system request");
    }
}
// Adapter sınıfı
class Adapter {
    constructor(oldSystem) {
        this.oldSystem = oldSystem;
    }
    newRequest() {
        this.oldSystem.oldRequest();
    }
}
// Kullanım
const oldSystem = new OldSystemImpl();
const adapter = new Adapter(oldSystem);
adapter.newRequest(); // "Old system request" yazdırır
