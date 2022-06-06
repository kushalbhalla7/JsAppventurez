"use strict"

// // Task 1: is array copied

// let fruits = ["Apples", "Pear", "Orange"];
// // push a new value into the "copy"
// let shoppingCart = fruits;
// shoppingCart.push("Banana");
// // what's in fruits?
// alert( fruits.length ); // 4


// // Task 2: Array operations

// let arr = ["Jazz", "Blues"];
// arr.push("Rock-n-Roll");
// arr[1]  = "Classics";
// arr.shift();
// arr.unshift("Rap", "Reggae")
// console.log(arr);


// // Task 3: Calling in an array context
// let arr = ["a", "b"];

// arr.push(function() {
//     alert( this ); 
// });

// console.log(arr[2]());

// /* a, b, function() { alert(this)} */



// //Task 4: sum input numbers

// function sumInput() {
//     let a, b;
//     while (true) {
//         a = +prompt("a?", 0);
//         if (isFinite(a)) break;
//     }
//     while (true) {
//         b = +prompt("b?", 0);
//         if (isFinite(b)) break;
//     }
//     return a+b;
// }
// console.log(sumInput());


//Task 5: A maximal subarray
function getMaxSubSum(arr) {
    let sum = 0;
    for (let i in arr) {
        if (arr[i] < 0) {
            continue;
        }
        sum += arr[i];
    }
    return sum;
}
console.log(getMaxSubSum([1, -2, 3, 4, -9]));
console.log(getMaxSubSum([1, -2, -9]));
console.log(getMaxSubSum([1, 3, 9]));
