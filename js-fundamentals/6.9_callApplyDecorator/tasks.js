"use strict";


// // Task 1: Spy decorator
// // Create a decorator spy(func) that should return a wrapper that saves all calls to function in its calls property.
// // Every call is saved as an array of arguments.


// function work(a, b) {
//     console.log( a + b );
// }

// function spy(func) {

//     function wrapper(...args) {
//         wrapper.calls.push(args);
//         return func.apply(this, args);
//     }

//     wrapper.calls = [];
//     return wrapper;
// }

// work = spy(work);

// work(1, 2);
// work(4, 5);

// for (let args of work.calls) {
//     console.log( 'call:' + args.join());
// }



// // Task 2: Delaying decorator
// // Create a decorator delay(f, ms) that delays each call of f by ms milliseconds.


// function f(x) {
//     console.log(x);
// }

// function delay(func, arg) {

//     return function() {
//         setTimeout(() => {
//             return func.call(this, ...arguments)
//         }, arg);
//     }
// }


// let f1000 = delay(f, 1000);
// let f1500 = delay(f, 1500);

// f1000("test");
// f1500("test");



//  Task 3: debounce decorator


// let alert = (text) => {
//     console.log(text);
// }

// //decorator that returns latest output after 1000ms
// function debounce(func, ms) {

//     let timeout;
//     return function() {
//         clearTimeout(timeout);  // here we have to remove previous timeout so alert function should be called
//         timeout = setTimeout(() => {  // settings the timeout
//             return func.apply(this, arguments) 
//         }, ms);
//     }
// }

// let f = debounce(alert, 1000);

// f("a");
// setTimeout( () => f("b"), 200);
// setTimeout( () => f("c"), 500);



// Task 4: Throttle decorator

function f(a) {
    console.log(a);
}

function throttle(func, ms) {

    let allowed = true;  // for showing first result 
    let timeout;

    function wrapper() {
        if ( allowed ) { // run function to show result for first time
            func.apply(this, arguments);
        }
        allowed = false;  //  makeing false to not to show next result until 1000
        clearTimeout(timeout);
        timeout = setTimeout(() => {
            return func.apply(this, arguments);
        }, ms)
    }

    return wrapper;
}

let f1000 = throttle(f, 1000);

f1000(1); // shows 1
f1000(2); // 1000ms not out yet
f1000(3); // 1000ms not out yet

setInterval(() => f1000(5), 3000);