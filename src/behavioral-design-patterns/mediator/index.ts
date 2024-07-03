interface ChatMediator {
  sendMessage(message: string, user: User): void;
  addUser(user: User): void;
}

class ConcreteChatMediator implements ChatMediator {
  private users: User[] = [];

  public addUser(user: User): void {
    this.users.push(user);
  }

  public sendMessage(message: string, user: User): void {
    for (const u of this.users) {
      if (u !== user) {
        u.receive(message);
      }
    }
  }
}

class User {
  private name: string;
  private mediator: ChatMediator;

  constructor(name: string, mediator: ChatMediator) {
    this.name = name;
    this.mediator = mediator;
  }

  public send(message: string): void {
    console.log(`${this.name} sends: ${message}`);
    this.mediator.sendMessage(message, this);
  }

  public receive(message: string): void {
    console.log(`${this.name} receives: ${message}`);
  }
}

const mediator: ChatMediator = new ConcreteChatMediator();

const user1: User = new User("User1", mediator);
const user2: User = new User("User2", mediator);
const user3: User = new User("User3", mediator);

mediator.addUser(user1);
mediator.addUser(user2);
mediator.addUser(user3);

user1.send("Hello everyone!");
user2.send("Hi User1!");
