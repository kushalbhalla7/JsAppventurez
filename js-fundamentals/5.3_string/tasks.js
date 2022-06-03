"use strict"

// // Task 1: Uppercase the first character

// function ucFirst(str) {
//     return str.toUpperCase();
// }
// console.log(ucFirst("john"));


// //Task 2: Check for spam

// function checkSpam(str) {
//     let newStr = str.toLowerCase();
  
//     return newStr.includes('viagra') || newStr.includes('xxx');
// }

// console.log(checkSpam('buy ViAgRa now'));
// console.log(checkSpam('free xxxxx'));
// console.log(checkSpam('innocent rabbit'));



// // Task 3: Truncate the text

// function truncate(str, maxlength) {
//     return str.length > maxlength ? str.slice(0, maxlength -1) + "..." : str;
// }
// console.log(truncate("What is it like to on mountain?", 15));



//Task 4: Extract the money
function extractCurrenyValue(str) {
    return str.slice(1, str.length);
    // return +str.slice(1);
}
console.log(extractCurrenyValue('$120'));