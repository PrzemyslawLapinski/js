console.log('--------- Scope Chain ----------')
function b() {
    console.log(myVar)
}
function a() {
    var myVar = 2;
    b();
}

var myVar = 1;
a();

console.log('--------- Asynchronous callbacks ----------')

function waitThreeSeconds() {
    var ms = 1000 + new Date().getTime();
    while(new Date() < ms) {}
    console.log('finished function')
}

function clickHandler() {
    console.log('click event! dopiero teraz xD')
}

document.addEventListener('click', clickHandler);

waitThreeSeconds()
// to bedzie wczesniej niz 'click event', poniewaz musi skonczyc caly execution scope, zanim zacznie patrzec na event queue
console.log('finishid Asynchronous callbacks')

console.log('-----------primitive types----------')
// single value, no object
undefined // represents lack of existence, for engine
null //  represents lack of existence, for user
Boolean // true or false
Number // floating number , has decimal
String // a sequence of characters
Symbol // in ES6, we will back here

console.log('-----------operators----------')
var aOperator;//  = 3 + 4;
//function +(a, b) {
//    return a - b;
//}
// aOperator = +(3,4); // to zwraca 4 xd
console.log('aOperator: '+aOperator)

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence

console.log('-----------coercion----------')
// converting a value from one type to another
var coercion = 1 + '2';
console.log(coercion)

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness

console.log(undefined || 'defaultowa wartosc');
console.log('inna wartos' || 'defaultowa wartosc');
console.log(0 || 1);

console.log('-----------library----------')
console.log(libraryName);

console.log('-----------objects and functions----------')

var person = new Object();
person["firstname"] = "Tony";
person.lastname = "Stark";
console.log(person.firstname + " : " + person["lastname"]);

console.log('-----------objects literals----------')

var person = {}; // the same like new Object()

console.log('-----------faking namespace----------')
// js haven't namespace, to namespace w obiekcie xd
var english = {
    greet: 'Hello!',
};
var spanish = {
    greet: 'Hola!',
};

console.log('-----------JavaScript Object Notation JSON----------')
// insparied by object literal syntax, but is not the same!

// function are a special type of object

console.log('-----------by value vs by reference ----------')
// primitive by value
// object by reference, (even as parameters in function !!!)

// mutate - to change something
// immutable - means it can't be changed

var arr = [
    1,
    false,
    "haha",
    {
        name: 'Tony'
    },
    function(name) {
        return 'hoho' + name;
    }
]
console.log(arr);

function howReturnWork() {
    return // domyslnie tu wstawi ;
    {
        firstname: 'tony'
    }
}
console.log('how return work: ' + howReturnWork())

// immediately invoked function expression IIFE
var test = function(name){
    return 'call immediately function ' + name
}('john')
console.log(test);

function functionRturnFunction(whatToSay) {
    return function(name) {
        return whatToSay + ' ' + name
    }
}
console.log(functionRturnFunction('Hi')('Second function'))


function buildFunctions() {
    var arr = [];
    for(var i = 0; i<3; i++) {
        let j = i;
        var varI = i;
        arr.push(function() {
                 console.log(i + ' : j = ' + j + ' : varI = ' + varI);
                 }
        );
    }
    console.log('i in function: ' + i)
return arr;
}
var fs = buildFunctions();
fs[0]();
fs[1]();
fs[2]();
console.log('i: ' + i)

// call()
// apply()
// bind()



