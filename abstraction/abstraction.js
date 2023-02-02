var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var BankAccount = /** @class */ (function () {
    function BankAccount(accountHolder, balance) {
        this.accountHolder = accountHolder;
        this.balance = balance;
    }
    return BankAccount;
}());
var SavingsAccount = /** @class */ (function (_super) {
    __extends(SavingsAccount, _super);
    function SavingsAccount(accountHolder, balance, interestRate) {
        var _this = _super.call(this, accountHolder, balance) || this;
        _this.interestRate = interestRate;
        return _this;
    }
    SavingsAccount.prototype.deposit = function (amount) {
        this.balance += amount;
    };
    SavingsAccount.prototype.withdraw = function (amount) {
        if (this.balance >= amount) {
            this.balance -= amount;
        }
        else {
            console.log("Insufficient balance");
        }
    };
    SavingsAccount.prototype.getBalance = function () {
        console.log("saving account balance is ".concat(this.balance));
    };
    return SavingsAccount;
}(BankAccount));
var savingsAccount = new SavingsAccount("John Doe", 1000, 0.05);
savingsAccount.deposit(5000);
savingsAccount.getBalance(); // 1500
savingsAccount.withdraw(2000);
savingsAccount.getBalance(); // 1500
