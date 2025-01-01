function BankAccount(name,Balance=0){
    this.name=name;
    this.Balance=Balance;
    this.accountNo=Math.floor(Math.random()*1000000000);
    }
    //deposit
    BankAccount.prototype.deposit=function (amount){
        this.Balance+=amount;
        return `Deposited ${amount}, Current Balance: ${this.Balance}`;
    }
    //withdraw
    BankAccount.prototype.withDraw=function(amount){
        if(this.Balance>=amount){
         this.Balance-=amount;
            return `Withdrawn ${amount}, Current Balance: ${this.Balance}`;
        }
        else{
            return `Insufficient Balance, Current Balance: ${this.Balance}`;
        }
    }
    //get details
    BankAccount.prototype.getDetails=function(){
        return `Account No: ${this.accountNo}, Name: ${this.name}, Balance: ${this.Balance}`;
    }

    function SavingsAcount(name,balance,limit){
        BankAccount.call(this,name,balance);
        this.limit=5000;
    }
    SavingsAcount.prototype=Object.create(BankAccount.prototype)

    const account = new BankAccount("Basir",1000);
    console.log(account);
    const account2 = new SavingsAcount("Basir",1000);
    account2.deposit(500);
    account2.withDraw(200);
    console.log(account2);