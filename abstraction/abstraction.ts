abstract class BankAccount {
  protected accountHolder: string;
  protected balance: number;

  constructor(accountHolder: string, balance: number) {
    this.accountHolder = accountHolder;
    this.balance = balance;
  }

  abstract deposit(amount: number): void;
  abstract withdraw(amount: number): void;
}

class SavingsAccount extends BankAccount {
  private interestRate: number;

  constructor(accountHolder: string, balance: number, interestRate: number) {
    super(accountHolder, balance);
    this.interestRate = interestRate;
  }

  deposit(amount: number): void {
    this.balance += amount;
  }

  withdraw(amount: number): void {
    if (this.balance >= amount) {
      this.balance -= amount;
    } else {
      console.log("Insufficient balance");
    }
  }
  getBalance(): void {
    console.log(`saving account balance is ${this.balance}`)
  }
}

const savingsAccount = new SavingsAccount("John Doe", 1000, 0.05);
savingsAccount.deposit(5000);
savingsAccount.getBalance(); // 1500
savingsAccount.withdraw(2000);
savingsAccount.getBalance() // 1500
