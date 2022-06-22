"use strict";



// //  Task 1: Syntax check

// let user = {
//     name: "John",
//     go: function() {
//         console.log(this.name);
//     }
// }

// (user.go)();  // Error cannot access user before initialization

// // because compiler will take it as {}(user.go)();


// Task 2: Explain the value of "this"
// In the code below we intend to call obj.go() method 4 times in a row.
// But calls (1) and (2) works differently from (3) and (4). Why?

let obj, method;

obj = {
  go: function() { console.log(this); }
};

obj.go();               // (1) [object Object]

(obj.go)();             // (2) [object Object]

(method = obj.go)();    // (3) undefined

(obj.go || obj.stop)(); // (4) undefined


// in 3 : assignment does not return function context
// in 4 : obj.go || obj.stop returns undefined