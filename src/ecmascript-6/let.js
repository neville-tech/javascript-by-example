//without using 'let'
function variableScopeTest(){
    var a = 1;

    if(true){
        var a = 11;
        console.log('inner a = ', a);
    }

    console.log('outer a = ', a);
}

variableScopeTest();

//with using 'let'
function variableScopeTestUsingLet(){
    let a = 1;

    if(true){
        let a = 11;
        console.log('inner a = ' + a);
    }

    console.log('outer a = ' + a);
}

variableScopeTestUsingLet();

//another example

//without using 'let'
for(var i = 0; i < 10; i++){
    console.log('i inside the loop = ', i);
}

console.log('i outside the loop', i);

console.log();

//with using 'let'
for(let j = 0; j < 10; j++){
    console.log('i inside the loop = ', i);
}

console.log('i outside the loop = ', j);