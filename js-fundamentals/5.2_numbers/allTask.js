"use strict"

// // Task 1: sum numbers from the visitor
// // create a script thet prompts the visitor to enter two numbers and then shows their sum

// let num1 = +prompt("Enter number 1", 0);
// let num2 = +prompt("Enter number 2", 0);
// console.log(num1 + num2);


// //Task 2: why 6.35.toFixed(1) == 6.3?
// alert(1.35.toFixed(1));
// alert( Math.round(6.35 * 10) / 10);


// // Task 3: Repeat until the input is a number
// function readNumber() {
//     let result;
//     while(true) {
//         let num = prompt("Enter a  number", 0);
//         // if (!isNaN(num)) {
//         //     result = num;
//         //     break;
//         // }
//         if (isFinite(num)) {
//             result = num;
//             break;
//         }
//     }
//     return result;
// }
// console.log(readNumber());

// //Task 4: An occasional infinite loop
// let i = 0;
// while (i != 2) {
//     i += 0.2;
//     alert(i); // lost precision
// }


//Task 5: a random number from min to max 
// function random(min, max) {
//     return min + Math.random() * (max - min);
// }
// console.log(random(1, 5));


//Task 6: a random integer from min to max

function randomInteger(min, max) {
    return Math.trunc(min + Math.random() * (max + 1 - min));
    // return Math.floor(min + Math.random() * (max + 1 - min));
}

console.log(randomInteger(1, 5));