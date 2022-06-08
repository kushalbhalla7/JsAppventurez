"use strict";


// // Task 1: Turn the object into JSON and back

// // a object
// let user = {
//     name: "John Smith",
//     age: 35
// };
// console.log(user); //show default object

// // turning into JSON
// user = JSON.stringify(user);
// console.log(user); //turned object into JSON



// // Task 2: Exclude backreferences
// //write replacer function to stringify everything, but remove properties that reference meetup

// let room = {
//     number: 23
// };
  
// let meetup = {
//     title: "Conference",
//     occupiedBy: [{name: "John"}, {name: "Alice"}],
//     place: room
// };

// //circular refernces
// room.occupiedBy = meetup;
// meetup.self = meetup;

// //convert return value if key is black and value is meetup
// console.log(JSON.stringify(meetup, (key, value) => {
//     return (key != "" && value == meetup) ? undefined : value;
// }));