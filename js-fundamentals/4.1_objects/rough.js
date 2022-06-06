"use strict"


// Objects 

// let user = {
//     name: "kush",
//     age: 21
// };
// let user1 = {
//     "name": "kush",
//     age: 21
// };

// console.log(user, user1);
// // console.log(...user); // objects are not iterables

// user1.name = "Mani"
// console.log(user1);

// // delete user1.age
// // console.log(user1);

// user1["name"] = "Kale"; // key must be in quotes
// console.log(user1);

// let key = "name"

// alert(user1[key]); //Mani
// alert(user1.key); //undefined


// let obj = {
//     for: 9,
//     while: 9,
//     return : 10
// }

// alert(obj.for + obj.while + ob

// let obj = {};
// obj.__proto__ = 5;
// console.log(obj);
// console.log(obj.__proto__);

// let use = {
//     "name": "Rahul",
//     age: 19
// }
// let age = "age";
// console.log(age in use);

// let obj = {
//     test: undefined
// }

// console.log(obj.test);
// console.log("test" in obj);

let codes = {
    "89": "Germany",
    "34": "london",
    "3.5": "9843"
}

for(let code in codes) {
    console.log(code);
}