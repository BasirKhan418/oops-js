class BankAccount{
    #balance;
    constructor(name,balance){
        this.acccontNo=Date.now();
        this.name=name;
        this.#balance=balance;
    }
    get balance(){
        return this.#balance;
    }
    set balance(amount){
    if(isNaN(amount)){
        throw Error("Invalid input");   
    }
    this.#balance=amount;
    }
    deposit(amount){
        this.#balance+=amount;
        return `Deposited ${amount}, Current #balance: ${this.#balance}`;
    }
    withdraw(amount){
        if(this.#balance>=amount){
            this.#balance-=amount;
            return `Withdrawn ${amount}, Current #balance: ${this.#balance}`;
        }
        else{
            return `Insufficient #balance, Current #balance: ${this.#balance}`;
        }
    }
    getDetails(){
        return `Account No: ${this.acccontNo}, Name: ${this.name}, #balance: ${this.#balance}`;
    }
    #Calculateint(){
        console.log("Interest calculated");
    }
    Veer(){
        this.#Calculateint();
        console.log("Veer");
    }
}

class SavingsAcount extends BankAccount{
    constructor(name,balance){
        super(name,balance);
        this.limit=5000;
    }
    Takeloan(amount){
     console.log("Loan taken",amount,);
    }
}
let account = new BankAccount("Basir",1000);
console.log(account.balance);
account.balance=2000;
console.log(account);
account.Veer();
let account2 = new SavingsAcount("Basir",1000);
account2.deposit(500);
account2.Takeloan(2000);
console.log(account2);
