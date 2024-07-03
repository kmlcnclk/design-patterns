"use strict";
class ConcreteChatMediator {
    constructor() {
        this.users = [];
    }
    addUser(user) {
        this.users.push(user);
    }
    sendMessage(message, user) {
        for (const u of this.users) {
            if (u !== user) {
                u.receive(message);
            }
        }
    }
}
class User {
    constructor(name, mediator) {
        this.name = name;
        this.mediator = mediator;
    }
    send(message) {
        console.log(`${this.name} sends: ${message}`);
        this.mediator.sendMessage(message, this);
    }
    receive(message) {
        console.log(`${this.name} receives: ${message}`);
    }
}
const mediator = new ConcreteChatMediator();
const user1 = new User("User1", mediator);
const user2 = new User("User2", mediator);
const user3 = new User("User3", mediator);
mediator.addUser(user1);
mediator.addUser(user2);
mediator.addUser(user3);
user1.send("Hello everyone!");
user2.send("Hi User1!");
