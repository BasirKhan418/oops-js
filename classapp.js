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
let name = document.querySelector("#name");
let balance = document.querySelector("#balance");
let deposit = document.querySelector("#amount");
let acccontNo = document.querySelector("#accountNo");
let accontSection = document.querySelector("#accountDetails");
let arr =[];
console.log(BankAccount.prototype)

const addAccount=()=>{
    if(name.value=="" || balance.value==""){
        alert("Please fill all the fields");
        return;
    }
    let newaccount = new BankAccount(name.value,+balance.value);
    console.log(newaccount);
    accontSection.innerHTML+=` <tr>
                    <td>${newaccount.acccontNo}</td>
                    <td>${newaccount.name}</td>
                    <td>${newaccount.balance}</td>
                </tr>`
    arr.push(newaccount);
}


const DepositAmount=()=>{
    let accNo = acccontNo.value;
    let amount = deposit.value;
    if(accNo=="" || amount==""){
        alert("Please fill all the fields");
        return;
    }
    let account = arr.find((account)=>account.acccontNo==accNo);
    if(account==undefined){
        alert("Account not found");
        return;
    }
    let res = account.deposit(Number(amount));
    alert(res);
    accontSection.innerHTML="";
    arr.forEach((account)=>{
        accontSection.innerHTML+=` <tr>
                    <td>${account.accountNo}</td>
                    <td>${account.name}</td>
                    <td>${account.balance}</td>
                </tr>`
    })
}

const WithDrawAmount=()=>{
    let accNo = acccontNo.value;
    let amount = deposit.value;
    if(accNo=="" || amount==""){
        alert("Please fill all the fields");
        return;
    }
    let account = arr.find((account)=>account.acccontNo==accNo);
    if(account==undefined){
        alert("Account not found");
        return;
    }
    let res = account.withdraw(Number(amount));
    alert(res);
    accontSection.innerHTML="";
    arr.forEach((account)=>{
        accontSection.innerHTML+=` <tr>
                    <td>${account.accountNo}</td>
                    <td>${account.name}</td>
                    <td>${account.balance}</td>
                </tr>`
    })
}
