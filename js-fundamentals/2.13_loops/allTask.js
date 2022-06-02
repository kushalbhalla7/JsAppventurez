"use strict"

//All task of looping are done here


//Task 1: Last loop value
//what is the last value alerted by this code? why?

// let i = 3;
// while (i) {
//   alert( i-- ); // 3 2 1 and terminate because 0 is a falsy value
// }


//Task 2: Which values does the while loop show?
// For every loop iteration, write down which value it outputs and then compare it with the solution.

// //example first
// let i = 0;
// while (++i < 5) alert( i ); //1 2 3 4

// //example second
// let i = 0;
// while (i++ < 5) alert( i ); // 1 2 3 4 5


// // Task 3: Which values get shown by the "for" loop
// //example 1
// for (let i = 0; i < 5; i++) alert( i ); // 1 2 3 4
// //example 2
// for (let i = 0; i < 5; ++i) alert( i ); // 1 2 3 4


// Task 4: output even numbers in the loop
// Use the for loop to output even numbers from 2 to 10.

// for(let i=2; i<=10; i++) {
//     if(i % 2 === 0) {
//         alert(i);
//     }
// }


//Task 5: Replace "for" with "while"

//example with for loop
// for (let i = 0; i < 3; i++) {
//     alert( `number ${i}!` );
// }

//example with while loop
// let i = 0;
// while(i < 3) {
//     alert( `number ${i}!` );
//     i++;
// }


//Task 6: Repeat until the input is correct
// while(true) {
//     let number = prompt("Enter a number higher than 100", 0);
//     if(number < 100 && number) {
//         continue;
//     }
// }

//Task 7: ouput prime numbers

// let n = prompt("Enter the limit");
// let i = 2;
// while(i <= n) {
//     if(i === 0) {
//         alert(` ${i} is not a prime number`);
//     } else if( i === 2 || i === 3 || i === 5 || i === 7) {
//         alert(`${i} is a prime number`);
//     } else if(i % 2 === 0 || i % 3 === 0 || i % 5 === 0 || i % 7 === 0) {
//         alert(`${i} is not a prime number`);
//     } else {
//         alert(`${i} is a prime number`);
//     }
//     i++;
// }

// let n = prompt("Enter the limit");

// outer : for (let i = 2; i <= n; i++) {
//     for (let j = 2; j < i; j++) {
//         if ( i % j == 0) {
//             alert(`${i} is not a prime number`)
//             continue outer;
//         }
//     }
//     alert(`${i} is a prime number`);  
// }
