"use strict";



// Task 1: re-resolve promise?
// whats the ouput of the code below?

// let promise = new Promise(function(resolve, reject) {
//     resolve(1);

//     setTimeout(() => resolve(2), 1000);
// });

// promise.then(alert => console.log(alert)); //1 : because we already got result of promise others will be ignored



// // Task 2: Delay with a promise
// // The built-in function setTimeout uses callbacks. Create a promise-based alternative.
// // The function delay(ms) should return a promise. That promise should resolve after 
// // milliseconds, so that we can add .then to it, like this:


// function delay(ms) {
//     return new Promise((resolve) => {
//         setTimeout(resolve, 3000); // passing resolve to setTimeout
//     })
// }

// delay(3000).then(() => console.log('runs after 3 second')); // get promise object after 3 seconds



// Task 3: Animated circle with promise
// Rewrite the showCircle function in the solution of the task Animated circle with callback so that 
// it returns a promise instead of accepting a callback.