let arrayOfNumbers = [1,2,3,5,6,7,8,9,9,9,9,9,9,9,9,9];

let setOfUniqueValues = new Set(arrayOfNumbers);

setOfUniqueValues.add('1001');
setOfUniqueValues.add('1001');
setOfUniqueValues.add(1001);

setOfUniqueValues.add({firstName: 'Neville', lastName: 'Bokdawalla'});
setOfUniqueValues.add({firstName: 'Neville', lastName: 'Bokdawalla'});

setOfUniqueValues.delete(3);

console.log(setOfUniqueValues);

console.log(setOfUniqueValues.size);

//i can also lopp through the set
setOfUniqueValues.forEach(function(value){
    console.log('value is ', value);
})