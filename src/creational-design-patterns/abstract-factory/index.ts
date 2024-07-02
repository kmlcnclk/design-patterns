import { log } from "console";

interface AbstractFactory {
  createProductA(): AbstractProductAButton;
  createProductB(): AbstractProductBCheckbox;
}

class WinFactory implements AbstractFactory {
  createProductA(): AbstractProductAButton {
    return new WinConcreteProductA1();
  }

  createProductB(): AbstractProductBCheckbox {
    return new WinConcreteProductB1();
  }
}

class MacFactory implements AbstractFactory {
  createProductA(): AbstractProductAButton {
    return new MacConcreteProductA2();
  }

  createProductB(): AbstractProductBCheckbox {
    return new MacConcreteProductB2();
  }
}

interface AbstractProductAButton {
  usefulFunctionA(): string;
}

interface AbstractProductBCheckbox {
  usefulFunctionB(): string;
}

class WinConcreteProductA1 implements AbstractProductAButton {
  usefulFunctionA(): string {
    return "Win The result of the product A1.";
  }
}

class MacConcreteProductA2 implements AbstractProductAButton {
  usefulFunctionA(): string {
    return "Mac The result of the product A2.";
  }
}

class WinConcreteProductB1 implements AbstractProductBCheckbox {
  usefulFunctionB(): string {
    return "Win The result of the product B1.";
  }
}

class MacConcreteProductB2 implements AbstractProductBCheckbox {
  usefulFunctionB(): string {
    return "Mac The result of the product B2.";
  }
}

const winFactory = new WinFactory();

log(winFactory.createProductA().usefulFunctionA());
log(winFactory.createProductB().usefulFunctionB());

const macFactory = new MacFactory();

log(macFactory.createProductA().usefulFunctionA());
log(macFactory.createProductB().usefulFunctionB());
