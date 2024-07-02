"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const console_1 = require("console");
class WinFactory {
    createProductA() {
        return new WinConcreteProductA1();
    }
    createProductB() {
        return new WinConcreteProductB1();
    }
}
class MacFactory {
    createProductA() {
        return new MacConcreteProductA2();
    }
    createProductB() {
        return new MacConcreteProductB2();
    }
}
class WinConcreteProductA1 {
    usefulFunctionA() {
        return "Win The result of the product A1.";
    }
}
class MacConcreteProductA2 {
    usefulFunctionA() {
        return "Mac The result of the product A2.";
    }
}
class WinConcreteProductB1 {
    usefulFunctionB() {
        return "Win The result of the product B1.";
    }
}
class MacConcreteProductB2 {
    usefulFunctionB() {
        return "Mac The result of the product B2.";
    }
}
const winFactory = new WinFactory();
(0, console_1.log)(winFactory.createProductA().usefulFunctionA());
(0, console_1.log)(winFactory.createProductB().usefulFunctionB());
const macFactory = new MacFactory();
(0, console_1.log)(macFactory.createProductA().usefulFunctionA());
(0, console_1.log)(macFactory.createProductB().usefulFunctionB());
