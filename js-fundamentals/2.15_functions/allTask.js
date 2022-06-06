"use strict"

// Task 1: is "else" required?
// The following function returns true if the parameter age is greater than 18.

// function checkAge(age) {
//     if (age > 18) {
//       return true;
//     } else {
//       // ...
//       return confirm('Did parents allow you?');
//     }
// }

// function checkAge(age) {
//     if (age > 18) {
//       return true;
//     } 
    
//     return confirm('Did parents allow you?');
// } // worked as same way as it did in previous one


// Task 2: Rewrite the function using '?' or '||'
// The following function returns true if the parameter age is greater than 18.

// function checkAge(age) {
//     if (age > 18) {
//       return true;
//     } else {
//       return confirm('Did parents allow you?');
//     }
// }

// // SOLUTION 1: using ternery operator
// function checkAge(age) {
//     return age > 18 ? true : confirm('Did parents allow you?');
// }
  
// checkAge(19); // nothing
// checkAge(10); // did parents allow you?

// // SOLUTION 2: using logical operators
// function checkAge(age) {
//     return age > 18 || confirm('Did parents allow you?');
// }
  
// checkAge(19); // nothing
// checkAge(10); // did parents allow you?


// // Task 3: function min(a, b)
// // write a function min(a, b) which returns the least of two numbers a and b

// function min(a, b) {
//     return a < b ? a : b;
// }

// alert(7, 9); // 7
// alert(-1, 5); // -1
// alert(1, 1); // 1

//Task 4: Fucntion pow(x, n) 
// Write a function pow(x,n) that returns x in power n. Or, in other words, multiplies x by itself n times and returns the result.

function pow(x, n) {
    return x ** n;
}

alert(pow(4, 4)); // 256
alert(pow(2, 3)); // 8