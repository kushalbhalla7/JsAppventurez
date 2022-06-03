"use strict"


//Task 1: Using "this in object literal"
//what will be the output

// function makeUser() {
//     return {
//         name: "John",
//         ref: this
//     };
// }

// let user = makeUser();
// alert(user.ref.name); //Error : cannnot read name is undefine


//Task 2: Create a calculator
// read() prompts for two values and saves them as object properties with names a and b respectively.
// sum() returns the sum of saved values.
// mul() multiplies saved values and returns the result.

// let calculator = {
//     read() {
//         this.a = +prompt("Enter a");
//         this.b = +prompt("Enter b");
//     },
//     sum() {
//         return this.a + this.b;
//     },
//     mul() {
//         return this.a * this.b;
//     }
// }

// calculator.read();
// alert( calculator.sum());
// alert( calculator.mul());


//Task 3: Chaining
// There’s a ladder object that allows to go up and down:
// let ladder = {
//     step: 0,
//     up() {
//       this.step++;
//     },
//     down() {
//       this.step--;
//     },
//     showStep: function() { // shows the current step
//       alert( this.step );
//     }
//   };

// Now, if we need to make several calls in sequence, can do it like this:
// ladder.up();
// ladder.up();
// ladder.down();
// ladder.showStep(); // 1
// ladder.down();
// ladder.showStep(); // 0

// Modify the code of up, down and showStep to make the calls chainable, like this:
// ladder.up().up().down().showStep().down().showStep(); // shows 1 then 0


let ladder = {
    step: 0,
    up() {
      this.step++;
      return this;
    },
    down() {
      this.step--;
      return this;
    },
    showStep: function() { // shows the current step
      alert( this.step );
      return this;
    }
};

ladder.up().up().down().showStep().down().showStep(); // shows 1 then 0
