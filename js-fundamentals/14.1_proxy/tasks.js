"use strict";


// // Task 1: Error on reading non-existing property

// let user = {
//     name: "John"
// };

// function wrap(target) {
//     return new Proxy(target, {
//         get(target, prop) {
//             if (prop in target) {
//                 return target[prop];
//             } else {
//                 return `Property doesn't exist: "${prop}"`;
//             }
//         }
//     });
// }

// user = wrap(user);

// console.log(user.name); // John
// console.log(user.age); 




// //  Task 2: Accessing array[-1]

// let array = [1, 2, 3];


// array = new Proxy(array, {
//     get(target, prop) {
//         if (prop < 0) {
//             return target[target.length - -(prop)];
//         } else {

//         }
//     }
// });

// console.log(array[-1]);
// console.log(array[-2]);
// console.log(array[-3]);



// Task 3: Observale

function makeObservable(target) {
    
}
  
let user = {};
user = makeObservable(user);
  
user.observe((key, value) => {
    alert(`SET ${key}=${value}`);
});
  
user.name = "John";