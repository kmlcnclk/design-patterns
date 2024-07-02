// Request türlerini tanımlayalım
enum RequestType {
  TYPE1,
  TYPE2,
  TYPE3,
}

// İstek sınıfı
class Request1 {
  constructor(public type: RequestType, public content: string) {}
}

// Handler (işleyici) için arayüz
interface Handler {
  setNext(handler: Handler): Handler;
  handle(request: Request1): void;
}

// Soyut Handler sınıfı
abstract class AbstractHandler implements Handler {
  private nextHandler: Handler | null = null;

  public setNext(handler: Handler): Handler {
    this.nextHandler = handler;
    return handler;
  }

  public handle(request: Request1): void {
    if (this.nextHandler) {
      this.nextHandler.handle(request);
    }
  }
}

// ConcreteHandler1 sınıfı
class ConcreteHandler1 extends AbstractHandler {
  public handle(request: Request1): void {
    if (request.type === RequestType.TYPE1) {
      console.log(`ConcreteHandler1 işliyor: ${request.content}`);
    } else {
      super.handle(request);
    }
  }
}

// ConcreteHandler2 sınıfı
class ConcreteHandler2 extends AbstractHandler {
  public handle(request: Request1): void {
    if (request.type === RequestType.TYPE2) {
      console.log(`ConcreteHandler2 işliyor: ${request.content}`);
    } else {
      super.handle(request);
    }
  }
}

// ConcreteHandler3 sınıfı
class ConcreteHandler3 extends AbstractHandler {
  public handle(request: Request1): void {
    if (request.type === RequestType.TYPE3) {
      console.log(`ConcreteHandler3 işliyor: ${request.content}`);
    } else {
      super.handle(request);
    }
  }
}

// Kullanım
const handler1 = new ConcreteHandler1();
const handler2 = new ConcreteHandler2();
const handler3 = new ConcreteHandler3();

handler1.setNext(handler2).setNext(handler3);

const request1 = new Request1(RequestType.TYPE1, "Request 1 İçeriği");
const request2 = new Request1(RequestType.TYPE2, "Request 2 İçeriği");
const request3 = new Request1(RequestType.TYPE3, "Request 3 İçeriği");

handler1.handle(request1); // ConcreteHandler1 işliyor: Request 1 İçeriği
handler1.handle(request2); // ConcreteHandler2 işliyor: Request 2 İçeriği
handler1.handle(request3); // ConcreteHandler3 işliyor: Request 3 İçeriği
