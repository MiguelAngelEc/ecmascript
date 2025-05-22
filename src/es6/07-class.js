//declare a class
class User{};

//instantiate a class

class user{
    //methods
    greeting(){
        return 'hello';
    }
};

const user1 = new user();
console.log(user1.greeting()); //hello
const user2 = new user();
console.log(user2.greeting()); //hello

//constructors

class user{
    //constructor(name){
    constructor(){
        console.log('New user created');
    }
    greeting(){
        return 'hello'; 
    }
}

const david = new user(); //New user created

//this

class user{
    constructor(name){
        this.name = name;
    }
    speak(){
        return 'hello'
    };
    greeting(){
        return `${this.speak()} ${this.name}`;
    }
}

const ana = new user('Ana');
console.log(ana.greeting()); //hello Ana

//setters and getters

class user{
    //constructor(name)
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    //methods
    speak(){
        return 'hello';
    };
    greeting(){
        return `${this.speak()} ${this.name}`;
    }

    get uAge(){
        return this.age;
    }

    set uAge(n){
        this.age = n;
    }
}

const ana1 = new user('Ana', 20);
console.log(ana1.uAge); //20
console.log(ana1.uAge = 30); //30



