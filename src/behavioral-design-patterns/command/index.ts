// Command arayüzü
interface Command {
  execute(): void;
  undo(): void;
}

// Receiver sınıfı
class TextEditor {
  private text: string = "";

  public paste(clipboard: string): void {
    this.text += clipboard;
    console.log(`Pasted: ${clipboard}`);
  }

  public undoPaste(clipboard: string): void {
    this.text = this.text.slice(0, -clipboard.length);
    console.log(`Undo paste: ${clipboard}`);
  }

  public getText(): string {
    return this.text;
  }
}

// ConcreteCommand sınıfı
class PasteCommand implements Command {
  private clipboard: string;
  private textEditor: TextEditor;

  constructor(textEditor: TextEditor, clipboard: string) {
    this.textEditor = textEditor;
    this.clipboard = clipboard;
  }

  public execute(): void {
    this.textEditor.paste(this.clipboard);
  }

  public undo(): void {
    this.textEditor.undoPaste(this.clipboard);
  }
}

// Invoker sınıfı
class CommandInvoker {
  private command: Command | null = null;

  public setCommand(command: Command): void {
    this.command = command;
  }

  public executeCommand(): void {
    if (this.command) {
      this.command.execute();
    }
  }

  public undoCommand(): void {
    if (this.command) {
      this.command.undo();
    }
  }
}

// Client
const textEditor = new TextEditor();
const pasteCommand = new PasteCommand(textEditor, "Hello");

const invoker = new CommandInvoker();
invoker.setCommand(pasteCommand);
invoker.executeCommand();
console.log(textEditor.getText()); // Output: Hello

invoker.undoCommand();
console.log(textEditor.getText()); // Output: (Geri alınmış metin)
