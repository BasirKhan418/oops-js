class BankAccount{
    constructor(name,balance){
        this.acccontNo=Date.now();
        this.name=name;
        this.balance=balance;
    }
    deposit(amount){
        this.balance+=amount;
        return `Deposited ${amount}, Current Balance: ${this.balance}`;
    }
    withdraw(amount){
        if(this.balance>=amount){
            this.balance-=amount;
            return `Withdrawn ${amount}, Current Balance: ${this.balance}`;
        }
        else{
            return `Insufficient Balance, Current Balance: ${this.balance}`;
        }
    }
    getDetails(){
        return `Account No: ${this.acccontNo}, Name: ${this.name}, Balance: ${this.balance}`;
    }
}

class SavingsAcount extends BankAccount{
    constructor(name,balance){
        super(name,balance);
        this.limit=5000;
    }
    Takeloan(amount){
     console.log("Loan taken",amount);
    }
}
let account = new BankAccount("Basir",1000);
console.log(account);
let account2 = new SavingsAcount("Basir",1000);
account2.deposit(500);
account2.Takeloan(2000);
console.log(account2);
