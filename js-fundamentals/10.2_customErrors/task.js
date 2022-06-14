"use strict";


// Task 1: Inherit from SysntaxError

// create a class FormatError that inherits from the build-int SysntaxError class.
//it should support message, name and stack properties


class SyntaxError extends Error {
    constructor(message) {
        super(message);
        this.name = "SyntaxError";
        // this.name = this.constructor.name;
    }
}

class FormatError extends SyntaxError {
    constructor(message) {
        super(message);
        this.name = "FormatError";
        // this.name = this.constructor.name;
    }
}

// creating an instance of FormatError class
let err = new FormatError("formatting error");
console.log(err.message); // formateting error
console.log(err.name); // FormateError
console.log(err.stack); // a list of nested calls with line numbers for each

// console.log(err.__proto__); //[SyntaxError]
// console.log(FormatError.prototype); //[SyntaxError]

console.log(err instanceof FormatError); // true
console.log(err instanceof SyntaxError); // true


