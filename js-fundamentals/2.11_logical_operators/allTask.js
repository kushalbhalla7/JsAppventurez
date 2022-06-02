"use strict"

//This file contains all task please uncomment to run seperatly

// //Task 1: whats the result of OR
// alert( null || 2 || undefined ); //2 because 2 is a truty value

// //Task 2: whats the result of OR'ed alerts
// alert( alert(1) || 2 || alert(3)); // 1 and 2 : alert returns undefined so in first chek 1 will be printed first then will return undefine becuase of first is falsy so 2 will print and thats all

// //Task 3: what is the result of AND
// alert( 1 && null && 2); // null : null is falsy value

// //Task 4: what is the result pf AND'ed alerts
// alert( alert(1) && alert(2)); //1 and undefind

// //Task 5: what rsult of OR AND OR
// alert(null || 2 && 3 || 4);  //3  : && has more precedence

//Task 6: check the range between
// Write an if condition to check that age is between 14 and 90 inclusively.
// “Inclusively” means that age can reach the edges 14 or 90.

// let age = prompt('Enter your age');
// if(age >= 14 && age <= 90) { // (14 =< age <= 90)
//     alert(age);
// }

// Task 7: check the range outside
// Write an if condition to check that age is NOT between 14 and 90 inclusively.
// Create two variants: the first one using NOT !, the second one – without it.

// let age = prompt('Enter your age');
// if(!(age >= 14 && age <= 90)) { // 
//     alert(age);
// }

// let age = prompt('Enter your age');
// if(age < 14 || age > 90) { // (14 =< age <= 90)
//     alert(age);
// }

//Task 8: a quetion about "if"
// Which of these alerts are going to execute?
// What will the results of the expressions be inside if(...)?

// if (-1 || 0) alert( 'first' ); //print
// if (-1 && 0) alert( 'second' ); //not print
// if (null || -1 && 1) alert( 'third' ); //print

//Task 9: check the login

let role = prompt('Enter your role');

if(role === 'Admin') {
    let password = prompt('Please provide the password');

    if(password === "TheMaster") {
        alert("Welcome");
    } else if(password === "") {
        alert("canceled");
    } else {
        alert("Wrong password");
    }
} else if (role === "" || role === null) {
    alert("Canceled");
} else {
    alert("I don\'t know you");
}