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
                    <td>${newaccount.accountNo}</td>
                    <td>${newaccount.name}</td>
                    <td>${newaccount.Balance}</td>
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
    let account = arr.find((account)=>account.accountNo==accNo);
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
                    <td>${account.Balance}</td>
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
    let account = arr.find((account)=>account.accountNo==accNo);
    if(account==undefined){
        alert("Account not found");
        return;
    }
    let res = account.withDraw(Number(amount));
    alert(res);
    accontSection.innerHTML="";
    arr.forEach((account)=>{
        accontSection.innerHTML+=` <tr>
                    <td>${account.accountNo}</td>
                    <td>${account.name}</td>
                    <td>${account.Balance}</td>
                </tr>`
    })
}
