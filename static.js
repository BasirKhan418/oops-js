class User{
    static id =1;
    constructor(name,age,income){
        this.name=name;
        this.age=age;
        this.income=income;
        this.id =User.id++;
    }
    static SortbyAge(a,b){
        return a.age-b.age;
    }
    static SortByIncome(a,b){
        return a.income-b.income;
    }
    static {
        console.log("Static block");
    }
    sayHI(){
        console.log(`Hello ${this.name}`);
    }
}
let arr =[]
let user1 = new User("Basir",35,2000);
let user2 = new User("Ali",15,5000);
let user3 = new User("Ahmed",25,1000);
arr.push(user1,user2,user3);
arr.sort(User.SortByIncome);
console.log(arr);
//static clases 

class Basir{
    static conf(){
        console.log("Static method");
    }
    static db ="mongodb";
    static getDb(){
        console.log(`Database: ${Basir.db}`);
    }
    
}