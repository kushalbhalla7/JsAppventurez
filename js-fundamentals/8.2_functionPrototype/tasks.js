"use strict";


// // Task 1: changing "prototype"

// // variant 1
// function Rabbit() {}
// Rabbit.prototype = {
//     eats: true
// };


// let rabbit = new Rabbit();

// Rabbit.prototype = {
//     sma: "kjasd"
// }


// console.log( rabbit.eats ); // true
// console.log( rabbit.sma );
// console.log(Rabbit.prototype);

// // variant 2
// function Rabbit() {}
// Rabbit.prototype = {
//     eats: true
// };

// let rabbit = new Rabbit();
// Rabbit.prototype.eats = false;

// console.log( rabbit.eats ); // false


// // variant 3
// function Rabbit() {}
// Rabbit.prototype = {
//     eats: true
// };

// let rabbit = new Rabbit();
// delete rabbit.eats;

// console.log( rabbit.eats ); // true


// // variant 4
// function Rabbit() {}
// Rabbit.prototype = {
//     eats: true
// };

// let rabbit = new Rabbit();
// delete Rabbit.prototype.eats;

// console.log( rabbit.eats ); // undefined




// //  Task 2: create an object with the same construtor

// function Obj(value) {
//     this.value = value;
// }

// Obj.prototype = {
//     contructor: Obj
// };

// let obj = new Obj();
// let obj2 = new obj.contructor("somethigns");

// console.log(obj2);
