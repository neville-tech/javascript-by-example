class Person{
    constructor(firstName, lastName, age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    static greetTheUser(){
        console.log('Hey...welcome to es6!');
    }
}

let person = new Person('Neville', 'Bokdawalla', 30);

Person.greetTheUser();