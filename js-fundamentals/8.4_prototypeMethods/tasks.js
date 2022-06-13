"use strict";


// Task 1: add toString to the dictionary

//create a object with null
let dictionary = Object.create(null);

// define a property method to dictionary object
Object.defineProperty(dictionary, "toString", {
    get() {
        return Object.keys(this).join();
    }
});

dictionary.apple = "Apple";
dictionary.__proto__ = "test";

for (let key in dictionary) {
    console.log(key);
}

console.log(dictionary.toString);
