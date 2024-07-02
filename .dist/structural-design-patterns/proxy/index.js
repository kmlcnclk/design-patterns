"use strict";
// RealBankAccount class
class RealBankAccount {
    constructor() {
        this.balance = 0;
    }
    deposit(amount) {
        this.balance += amount;
    }
    withdraw(amount) {
        if (amount <= this.balance) {
            this.balance -= amount;
        }
        else {
            console.log("Insufficient funds");
        }
    }
    getBalance() {
        return this.balance;
    }
}
// BankAccountProxy class
class BankAccountProxy {
    constructor(realAccount, userRole) {
        this.realAccount = realAccount;
        this.userRole = userRole;
    }
    deposit(amount) {
        this.realAccount.deposit(amount);
    }
    withdraw(amount) {
        if (this.userRole === "Admin") {
            this.realAccount.withdraw(amount);
        }
        else {
            console.log("Unauthorized access");
        }
    }
    getBalance() {
        if (this.userRole === "Admin" || this.userRole === "User") {
            return this.realAccount.getBalance();
        }
        else {
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
