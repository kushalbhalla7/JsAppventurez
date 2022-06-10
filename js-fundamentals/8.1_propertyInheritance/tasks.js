"use strict";



// //  Task 1: Working with prototype
// // which value are shown in the process

// let animal = {
//     jumps: null
// };

// let rabbit = {
//     __proto__: animal,
//     jumps: true
// };

// console.log( rabbit.jumps );  // true : it finds jumps inside rabbit

// delete rabbit.jumps;

// console.log( rabbit.jumps ); // null : it finds jumps inside animal which is inherited

// delete animal.jumps;

// console.log( rabbit.jumps ); // undefined : cant find jumps inside both





// // Task 2: searching algorithm
// // which one is fast

// let head = {
//     glasses: 1
// };

// let table = {
//     __proto__: head,
//     pen: 3
// };

// let bed = {
//     __proto__: table,
//     sheet: 1,
//     pillow: 2
// };

// let pockets = {
//     __proto__: bed,
//     money: 2000
// };

// console.log(pockets.pen);
// console.log(bed.glasses);


// // variant 1
// console.log(pockets.glasses);  // this needs to check in every object until head

// // variant 2
// console.log(head.glasses); // this is faster because it finds gla



// //  Task 3: where does it write
// // which object recieves the full property: animal or rabbit?

// let animal = {
//     eat() {
//         this.full = true;
//     }
// };

// let rabbit = {
//     __proto__: animal
// };

// rabbit.eat(); // rabbit will recieve full property


//  Task 4: why are both hasmsters full?

let hamster = {
    stomach: [],

    eat(food) {
        this.stomach.push(food); // for push property must be predefined other it will into chain of inheritance
        // this.stomach = [food]
    }
};

let speedy = {
    __proto__: hamster,
    stomach: []
};

let lazy = {
    __proto__: hamster,
    stomach: []
};

speedy.eat("apple");
console.log(speedy.stomach); // ["apple"]

console.log(lazy.stomach); // []
