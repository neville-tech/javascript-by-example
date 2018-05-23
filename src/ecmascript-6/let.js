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