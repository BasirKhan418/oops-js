class Basir{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
    greet(){
        console.log(`Hello ${this.name}`);
    }
    get getInf(){
        console.log(`Name: ${this.name}, Age: ${this.age}`);
    }
    set setInf(name){
        this.name=name;
    }
}
class UpdatedBasir extends Basir{
    constructor(name,age,job){
        super(name,age);
        this.job=job;
    }
    summary(){
        console.log(`${this.name} is ${this.age} years old and works as a ${this.job}`);
    }
    greet(){
        console.log(`Hello ${this.name}, you are a ${this.job}`);
    }

}

let 