"use strict";
class CreditCardPayment {
    constructor(cardNumber) {
        this.cardNumber = cardNumber;
    }
    pay(amount) {
        console.log(`${amount} paid with credit card.`);
    }
}
class PayPalPayment {
    constructor(email) {
        this.email = email;
    }
    pay(amount) {
        console.log(`${amount} paid using PayPal.`);
    }
}
class ShoppingCart {
    setPaymentStrategy(paymentStrategy) {
        this.paymentStrategy = paymentStrategy;
    }
    checkout(amount) {
        this.paymentStrategy.pay(amount);
    }
}
const cart = new ShoppingCart();
// Kredi kartı ile ödeme
cart.setPaymentStrategy(new CreditCardPayment("1234-5678-9012-3456"));
cart.checkout(100);
// PayPal ile ödeme
cart.setPaymentStrategy(new PayPalPayment("example@example.com"));
cart.checkout(200);
