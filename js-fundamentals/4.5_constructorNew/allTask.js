"use strict"


//Task 1: TWO FUNCTIONS - one object
// Is it possible to create functions A and B so that new A() == new B()?

// let obj = {}
// function A() { return obj }
// function B() { return obj }
// let a = new A;
// let b = new B;
// alert( a == b );


//Task 2: Create new calculator

// let Calculator = function() {
//     this.read = function() {
//         this.a = +prompt("Enter a");
//         this.b = +prompt("Enter b");
//     }

//     this.sum = function() {
//         return this.a + this.b;
//     }

//     this.mul = function() {
//         return this.a * this.b;
//     }
// };

// let calculator = new Calculator();

// calculator.read();

// alert( "Sum=" + calculator.sum());
// alert( "Mul=" + calculator.mul());



//Task 3: create new accumulator

let Accumulator = function(val) {
    this.value = val;

    this.read = function() {
        this.value = +prompt("Enter a value", 0);
    }
}


let accumulator = new Accumulator(1);

accumulator.read();
accumulator.read();

alert(accumulator.value);