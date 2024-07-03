interface PaymentStrategy {
  pay(amount: number): void;
}

class CreditCardPayment implements PaymentStrategy {
  private cardNumber: string;

  constructor(cardNumber: string) {
    this.cardNumber = cardNumber;
  }

  pay(amount: number): void {
    console.log(`${amount} paid with credit card.`);
  }
}

class PayPalPayment implements PaymentStrategy {
  private email: string;

  constructor(email: string) {
    this.email = email;
  }

  pay(amount: number): void {
    console.log(`${amount} paid using PayPal.`);
  }
}

class ShoppingCart {
  private paymentStrategy!: PaymentStrategy;

  setPaymentStrategy(paymentStrategy: PaymentStrategy): void {
    this.paymentStrategy = paymentStrategy;
  }

  checkout(amount: number): void {
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
