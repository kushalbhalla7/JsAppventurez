"use strict";


// // Task 1: add toString to the dictionary

// //create a object with null
// let dictionary = Object.create(null);

// // define a property method to dictionary object
// Object.defineProperty(dictionary, "toString", {
//     get() {
//         return Object.keys(this).join();
//     }
// });

// dictionary.apple = "Apple";
// dictionary.__proto__ = "test";

// for (let key in dictionary) {
//     console.log(key);
// }

// console.log(dictionary.toString);



// Task 2: the difference between calls

function Rabbit(name) {
    this.name = name;
}

Rabbit.prototype.sayHi = function() {
    console.log(this.name);
};

let rabbit = new Rabbit("Rabbit");

rabbit.sayHi(); // Rabbit
// all will be undefined because we are not passing any argument to main function
Rabbit.prototype.sayHi();
Object.getPrototypeOf(rabbit).sayHi();
rabbit.__proto__.sayHi();