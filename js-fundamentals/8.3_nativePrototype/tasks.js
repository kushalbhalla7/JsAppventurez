"use strict";



// // Task 1: add method "f.defer(ms" to functions
// // add to the prototype of all function the method defer(ms),  that runs the function after ms milliseconds

// Function.prototype.defer = function(ms) {
//     setTimeout(this, ms);
// }

// function f() {
//     console.log("hello");
// }

// f.defer(1000);



// Task 2: add the decorating "defer()" to functions
// add to the prototype of all functions the methode defer(ms), that returns a wrapper delaying the call by ms milliseconds

Function.prototype.defer = function(ms) {
    let func = this;
    return function(...args) {
        setTimeout(() =>  func.apply(this, args), ms)
    }
}

function f(a, b) {
    console.log( a + b );
}

f.defer(1000)(1, 2);