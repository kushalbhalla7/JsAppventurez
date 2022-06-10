"use strict";


// //  Task 1: bound function as a method
// // what will be the output

// function f() {
//     console.log( this );
// }

// let user = {
//     g: f.bind(null) // in f this == null
// };

// user.g(); // null : beacuse context null be fixed to f this



// // Task 2:  second bind 
// // what will be the output

// function f() {
//     console.log(this.name);
// }

// f = f.bind( {name: "John"} ).bind( {name: 'Ann'} );

// f();  /// John  :  a function cannot be re bound



// //  Task 3: fucntion property after bind
// // There’s a value in the property of a function. Will it change after bind? Why, or why not?


// function sayHi() {
//     console.log( this.name );
//     console.log( this.test );
// }

// sayHi.test = 5;  // test becomes a property of sayHi

// let bound = sayHi.bind({
//     name: "John"
// });

// console.log( bound.test ); // undefined : because test does not exists in this context
// console.log( sayHi.test ); // 5



// // Task 5: fix a function that loses "this"
// // The call to askPassword() in the code below should check the password and then call user.loginOk/loginFail depending on the answer.

// function askPassword(ok, fail) {
//     let password = process.argv[2]; //taking input from terminal
//     if (password == "rockstar") ok();
//     else fail();
// }

// let user = {
//     name: "John",

//     loginOK() {
//         console.log(`${this.name} logged in`);
//     },

//     loginFail() {
//         console.log(`${this.name} failed to log in`);
//     }
// };

// askPassword(user.loginOK, user.loginFail); // undefined : because this has no any context
// askPassword(user.loginOK.bind(user), user.loginFail.bind(user)); // John : assigned user obj to this



// Task 6: Partial application for login
// What should we pass askPassword in the code below, so that it calls user.login(true) as ok and user.login(false) as fail?


function askPassword(ok, fail) {
    let password = process.argv[2]; // taking input from terminal
    if (password == "rockstar") ok();
    else fail();
}

let user = {
    name: "John",
    login(result) {
        console.log(this.name + (result ? ' logged in' : ' failed to log in'));
    }
}

// bind login function to user object with a param
askPassword(user.login.bind(user, true), user.login.bind(user, false));
