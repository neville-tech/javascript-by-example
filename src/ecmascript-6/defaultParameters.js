function greetTheUser(greeting){
    console.log(`Hi.. ${greeting}`);
}

greetTheUser('neville');

//using default parameters
function showWelcomeMessage(greeting = 'Hi there...!'){
    console.log(greeting);
}

showWelcomeMessage();

showWelcomeMessage('Hello Nev..');