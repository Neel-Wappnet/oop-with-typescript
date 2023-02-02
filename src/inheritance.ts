//typescript support single inheritance and multilevel inhertance
//typescript does not support multiple, hierarchical and hybrid inheritance but multiple inheritance can be achieved by interface

//bank account balance detail class
class BankAccount {
  private _balance: number;
  protected _accountNumber: string;

  constructor(accountNumber: string) {
    this._accountNumber = accountNumber;
    this._balance = 0;
  }

  //method for get account number
  get accountNumber(): string {
    return this._accountNumber;
  }

  //method for get account balance
  get balance(): number {
    return this._balance;
  }

  //for add money from an account
  deposit(amount: number): void {
    this._balance += amount;
  }

  //for withdraw money from an account
  withdraw(amount: number): void {
    this._balance -= amount;
  }
}


// checking account if balanace is lower then withdraw amount
class CheckingAccount extends BankAccount {
  private _insufficientBalance: number;

  constructor(accountNumber: string, insufficientBalance: number) {
    super(accountNumber);
    this._insufficientBalance = insufficientBalance;
  }

  get insufficientBalance(): number {
    return this._insufficientBalance;
  }

  //if account has insufficient balance then transection has been declined
  withdraw(amount: number): void {
    this.balance - amount >= this.insufficientBalance ? super.withdraw(amount) : console.log(`Transaction declined. Insufficient funds. Current balance: ${this.balance}`);
  }
}


//adding interest in saving account of the bank
class SavingsAccount extends BankAccount {
  private _interestRate: number;

  constructor(accountNumber: string, interestRate: number) {
    super(accountNumber);
    this._interestRate = interestRate;
  }

  get interestRate(): number {
    return this._interestRate;
  }

  //adding interest in account
  addInterest(): void {
    this.deposit(this.balance * this.interestRate);
  }
}

const checkingAccount = new CheckingAccount("123456", 500);
checkingAccount.deposit(1000);
checkingAccount.withdraw(1500);
console.log(checkingAccount.balance); // 1000

const savingsAccount = new SavingsAccount("654321", 0.05);
savingsAccount.deposit(1000);
savingsAccount.addInterest();
console.log(savingsAccount.balance); //1050