"use strict";


// // Task 1: Store "unread" flags

// //all messages
// let messages = [
//     {text: "Hello", from: "John"},
//     {text: "How goes?", from: "John"},
//     {text: "See you soon", from: "Alice"}
// ]

// // create set to store read message becuase it does not hold similer values
// let readMessages = new WeakSet();

// //add messages to read messages set
// readMessages.add(messages[0]);
// readMessages.add(messages[1]);

// //this answer has been read
// console.log(readMessages.has(messages[0]));

// messages.shift();
// console.log(readMessages.delete(messages[0]));
// console.log(readMessages.has(messages[0]));


// Task 2: Store read dates
//all messages
let messages = [
    {text: "Hello", from: "John"},
    {text: "How goes?", from: "John"},
    {text: "See you soon", from: "Alice"}
]

// using weakMap because it gives us key value pair storing
let readMessages = new WeakMap();

// adding one message to be raed with current date
readMessages.set(messages[0], new Date());
readMessages.set(messages[1], new Date())
//checking that messages is read or not
console.log(readMessages.get(messages[0])); // get date object 
console.log(readMessages.get(messages[1]));