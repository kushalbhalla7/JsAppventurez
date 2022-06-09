"use strict";



// //Task 1: output every second
// //Write a function printNumbers(from, to) that outputs a number every second, starting from from and ending with to.

// // 1 variant using setInterval

// const printNumbers = (from , to) => {
//     let count = from;
//     let timeId = setInterval(() => {
//         console.log(count);
//         count++;
//         if (count == to) {
//             clearInterval(timeId);
//         }
//     }, 100)
// }

// printNumbers(5, 16)



// // 2 variant using setTimeout

// const printNumbers = (from , to) => {
//     let count = from;

//     let timeId = setTimeout(function again() {
//         console.log(count);
//         count++;
//         if (count != to) {
//             setTimeout(again, 100)
//         }
//     }, 100);
// }

// printNumbers(5, 16);




// Task 2: what will setTimeout show
// In the code below there’s a setTimeout call scheduled, then a heavy calculation is run, that takes more than 100ms to finish.

let i = 0;

setTimeout(() => console.log(i), 100); // ?

// assume that the time to execute this function is >100ms
for(let j = 0; j < 100000000; j++) {
  i++;
} // 100000000  :  because i gets increased by one with each for loop iteration