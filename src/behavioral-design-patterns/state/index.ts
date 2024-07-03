// State arayüzü
interface State {
  handle(context: Character): void;
}

// Context sınıfı
class Character {
  private state: State;

  constructor() {
    this.state = new NormalState(); // Başlangıç durumu
  }

  public setState(state: State): void {
    this.state = state;
  }

  public request(): void {
    this.state.handle(this);
    console.log("Current state: ", this.state.constructor.name);
  }
}

// Concrete States
class NormalState implements State {
  public handle(context: Character): void {
    console.log("Character is in normal state.");
    context.setState(new DefenseState());
  }
}

class DefenseState implements State {
  public handle(context: Character): void {
    console.log("Character is in defense state.");
    context.setState(new AttackState());
  }
}

class AttackState implements State {
  public handle(context: Character): void {
    console.log("Character is in attack state.");
    context.setState(new NormalState());
  }
}

// Kullanım
const character = new Character();
character.request(); // Normal -> Defense
character.request(); // Defense -> Attack
character.request(); // Attack -> Normal
