let message = 'The speed of light is ' + 386000 + ' kms/s';
console.log(message);

let newMessage = `The speed of light is 3,86,000 kms/s`;
console.log(newMessage);

console.log();

//another example
let a = 5;
let b = 7;

let sum = a + b;

console.log('The sum of ' + a + ' and ' + b  + ' is ' + sum);

console.log(`The sum of ${a} and ${b} is ${sum}`);

//i can also call functions inside a template literal
function greetTheUser(name){
   return `Hey... ${name}`;
}

console.log(`${greetTheUser('Neville')}. Welcome to the world of javascript!`);