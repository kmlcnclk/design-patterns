"use strict";
// Request türlerini tanımlayalım
var RequestType;
(function (RequestType) {
    RequestType[RequestType["TYPE1"] = 0] = "TYPE1";
    RequestType[RequestType["TYPE2"] = 1] = "TYPE2";
    RequestType[RequestType["TYPE3"] = 2] = "TYPE3";
})(RequestType || (RequestType = {}));
// İstek sınıfı
class Request1 {
    constructor(type, content) {
        this.type = type;
        this.content = content;
    }
}
// Soyut Handler sınıfı
class AbstractHandler {
    constructor() {
        this.nextHandler = null;
    }
    setNext(handler) {
        this.nextHandler = handler;
        return handler;
    }
    handle(request) {
        if (this.nextHandler) {
            this.nextHandler.handle(request);
        }
    }
}
// ConcreteHandler1 sınıfı
class ConcreteHandler1 extends AbstractHandler {
    handle(request) {
        if (request.type === RequestType.TYPE1) {
            console.log(`ConcreteHandler1 işliyor: ${request.content}`);
        }
        else {
            super.handle(request);
        }
    }
}
// ConcreteHandler2 sınıfı
class ConcreteHandler2 extends AbstractHandler {
    handle(request) {
        if (request.type === RequestType.TYPE2) {
            console.log(`ConcreteHandler2 işliyor: ${request.content}`);
        }
        else {
            super.handle(request);
        }
    }
}
// ConcreteHandler3 sınıfı
class ConcreteHandler3 extends AbstractHandler {
    handle(request) {
        if (request.type === RequestType.TYPE3) {
            console.log(`ConcreteHandler3 işliyor: ${request.content}`);
        }
        else {
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
