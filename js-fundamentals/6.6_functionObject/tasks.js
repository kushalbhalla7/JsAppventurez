"use strict";

// // Task 1: Set and decrease for counter
// // Modify the code of makeCounter() so that the counter can also decrease and set the number:

// // counter() should return the next number (as before).
// // counter.set(value) should set the counter to value.
// // counter.decrease() should decrease the counter by 1.


// const makeCounter = () => {

//     let count = 0;

//     let counter = () => {
//         return count++;
//     }

//     counter.set = (value) => {
//         return count = value
//     };

//     counter.decrease = () => {
//         return --count;
//     };

//     return counter;

// }

// let counter = makeCounter();

// console.log(counter());
// console.log(counter.set(6));
// console.log(counter.decrease());
// console.log(counter.decrease());



// // Task 2: sum with an arbitatry amount of brackets


// const sum = (value) => {
//     let total = value;

//     // sum function return this function to add value to total
//     let next = (value1) => {
//         total += value1;
//         return next
//     }

//     next.total = () =>  {
//         return total;
//     }

//     return next;
// }

// console.log(sum(8)(5).total());
