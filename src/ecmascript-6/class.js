class Person{
    constructor(firstName, lastName, age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    displayAge(){
        console.log(this.firstName + "'s age is " + this.age);
    }
}

let person = new Person('Neville', 'Bokdawalla', 30);

person.displayAge();