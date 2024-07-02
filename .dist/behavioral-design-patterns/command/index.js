"use strict";
// Receiver sınıfı
class TextEditor {
    constructor() {
        this.text = "";
    }
    paste(clipboard) {
        this.text += clipboard;
        console.log(`Pasted: ${clipboard}`);
    }
    undoPaste(clipboard) {
        this.text = this.text.slice(0, -clipboard.length);
        console.log(`Undo paste: ${clipboard}`);
    }
    getText() {
        return this.text;
    }
}
// ConcreteCommand sınıfı
class PasteCommand {
    constructor(textEditor, clipboard) {
        this.textEditor = textEditor;
        this.clipboard = clipboard;
    }
    execute() {
        this.textEditor.paste(this.clipboard);
    }
    undo() {
        this.textEditor.undoPaste(this.clipboard);
    }
}
// Invoker sınıfı
class CommandInvoker {
    constructor() {
        this.command = null;
    }
    setCommand(command) {
        this.command = command;
    }
    executeCommand() {
        if (this.command) {
            this.command.execute();
        }
    }
    undoCommand() {
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
