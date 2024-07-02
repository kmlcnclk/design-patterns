// BankAccount interface
interface BankAccount {
  deposit(amount: number): void;
  withdraw(amount: number): void;
  getBalance(): number;
}

// RealBankAccount class
class RealBankAccount implements BankAccount {
  private balance: number = 0;

  deposit(amount: number): void {
    this.balance += amount;
  }

  withdraw(amount: number): void {
    if (amount <= this.balance) {
      this.balance -= amount;
    } else {
      console.log("Insufficient funds");
    }
  }

  getBalance(): number {
    return this.balance;
  }
}

// BankAccountProxy class
class BankAccountProxy implements BankAccount {
  private realAccount: RealBankAccount;
  private userRole: string;

  constructor(realAccount: RealBankAccount, userRole: string) {
    this.realAccount = realAccount;
    this.userRole = userRole;
  }

  deposit(amount: number): void {
    this.realAccount.deposit(amount);
  }

  withdraw(amount: number): void {
    if (this.userRole === "Admin") {
      this.realAccount.withdraw(amount);
    } else {
      console.log("Unauthorized access");
    }
  }

  getBalance(): number {
    if (this.userRole === "Admin" || this.userRole === "User") {
      return this.realAccount.getBalance();
    } else {
      console.log("Unauthorized access");
      return 0;
    }
  }
}

// Usage example
const realAccount = new RealBankAccount();
const adminProxy = new BankAccountProxy(realAccount, "Admin");
const userProxy = new BankAccountProxy(realAccount, "User");
const guestProxy = new BankAccountProxy(realAccount, "Guest");

adminProxy.deposit(1000);
console.log("Admin Balance:", adminProxy.getBalance()); // 1000

userProxy.withdraw(500);
console.log("User Balance:", userProxy.getBalance()); // 500

guestProxy.withdraw(100);
console.log("Guest Balance:", guestProxy.getBalance()); // Unauthorized access, 500
