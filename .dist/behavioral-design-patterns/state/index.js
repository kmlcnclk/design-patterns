"use strict";
// Context sınıfı
class Character {
    constructor() {
        this.state = new NormalState(); // Başlangıç durumu
    }
    setState(state) {
        this.state = state;
    }
    request() {
        this.state.handle(this);
        console.log("Current state: ", this.state.constructor.name);
    }
}
// Concrete States
class NormalState {
    handle(context) {
        console.log("Character is in normal state.");
        context.setState(new DefenseState());
    }
}
class DefenseState {
    handle(context) {
        console.log("Character is in defense state.");
        context.setState(new AttackState());
    }
}
class AttackState {
    handle(context) {
        console.log("Character is in attack state.");
        context.setState(new NormalState());
    }
}
// Kullanım
const character = new Character();
character.request(); // Normal -> Defense
character.request(); // Defense -> Attack
character.request(); // Attack -> Normal
