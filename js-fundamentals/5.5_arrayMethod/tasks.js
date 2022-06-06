"use strict";


// //Task 1: Translate border-left-width to boterLeftWidth

// // Write the function camelize(str) that changes dash-separated words like “my-short-string” into camel-cased “myShortString”.

// function camelize(str) {
//     return str
//         .split('-')
//         .map((item, index) => index == 0 ? item : item[0].toUpperCase() + item.slice(1))
//         .join('');
// }

// console.log(camelize("background-color"));  // == 'backgroundColor';


// // Task 2: Filter range
// // Write a function filterRange(arr, a, b) that gets an array arr, looks for elements with values higher or equal to a and lower or equal to b and return a result as an array.
// let filterRange = (arr, a, b) => {
//     return arr.filter((item, index) => (item >= a && item <=b));
// }
// let arr = [5, 3, 8, 1];

// let filtered = filterRange(arr, 1, 4);

// alert( filtered );
// alert( arr );


// // Task 3: filter range "in place"
// // Write a function filterRangeInPlace(arr, a, b) that gets an array arr and removes from it all values except those that are between a and b. The test is: a ≤ arr[i] ≤ b.

// const filterRangeInPlace = (arr, a, b) => {

//     for (let i = 0; arr.length > i; i++) {
//         let item = arr[i];
//         if (item < a || item > b) {
//             arr.splice(i, 1);
//             i--;
//         }

//     }
//     return arr;
// }

// let arr = [5, 5, 9, 3, 8, 1];
// console.log(filterRangeInPlace(arr, 1, 4));
// alert( arr );


// // Task 4: sort in decreasing order

// let arr = [5, 2, 21, 1, -10, 8];

// arr.sort((a, b) => {
//     if (a > b) return 1;
//     if (a == b) return 0;
//     if (a < b) return -1;
// });
// console.log(arr);


// // task 5: copy and sort array
// // We have an array of strings arr. We’d like to have a sorted copy of it, but keep arr unmodified.

// let arr = ["HTML", "javaScript", "CSS"];

// const copySorted = (arr) => {
//     return arr.slice(0).sort();
// }

// let sorted = copySorted(arr);
// alert( sorted );
// alert( arr );


// // task 6: create an extendable calculator

// function Calculator() {

//     this.methods = {
//         "+": (a, b) => a + b,
//         "-": (a, b) => a- b
//     }

//     this.calculate = (str) => {
//         let strSplit = str.split(" ");

//         let a = +strSplit[0];
//         let op = strSplit[1];
//         let b = +strSplit[2];

//         if (!this.methods[op] || isNaN(a) || isNaN(b)) {
//             return NaN;
//         }
//         return this.methods[op](a, b);
//     };

//     this.addMethode = (name, func) => {
//         this.methods[name] = func;
//     }
// }

// let calc = new Calculator;

// console.log(calc.calculate("5 + 9"));

// calc.addMethode("**", (a, b) => a ** b);
// console.log(calc.calculate("3 ** 3"));



// // Task 7: Map to names
// // You have an array of user objects, each one has user.name. Write the code that converts it into an array of names.

// let john = { name: "John", age: 25 };
// let pete = { name: "Pete", age: 30 };
// let mary = { name: "Mary", age: 28 };

// let users = [ john, pete, mary ];

// let names = users.map((item, index) => item.name);
// alert( names ); // John, Pete, Mary


// // Task 8: map to objects
// // Write the code to create another array from it, of objects with id and fullName, where fullName is generated from name and surname.

// let john = { name: "John", surname: "Smith", id: 1 };
// let pete = { name: "Pete", surname: "Hunt", id: 2 };
// let mary = { name: "Mary", surname: "Key", id: 3 };

// let users = [ john, pete, mary ];

// let usersMapped = users.map((item, index) => ({id: item.id, fullName: (item.name + item.surname)}))
// console.log(usersMapped);
// alert( usersMapped[0].id ) // 1
// alert( usersMapped[0].fullName ) // John Smith


// // Task 9: sort users by age
// // Write the function sortByAge(users) that gets an array of objects with the age property and sorts them by age.

// let john = { name: "John", age: 25 };
// let pete = { name: "Pete", age: 30 };
// let mary = { name: "Mary", age: 28 };
// let arr = [ pete, john, mary ];

// let sortByAge = arr => {
//     return arr.sort((a, b) => {
//         if (a.age > b.age) return 1;
//         if (a.age == b.age) return 0;
//         if (a.age < b.age) return -1;
//     })
// }
// sortByAge(arr);
// // now: [john, mary, pete]
// alert(arr[0].name); // John
// alert(arr[1].name); // Mary
// alert(arr[2].name); // Pete


// // Task 10: suffle an array
// // Write the function shuffle(array) that shuffles (randomly reorders) elements of the array.

// let arr = [1, 2, 3];
// const shuffle = arr => {
//     for (let i = 0; arr.length > i; i++) {
//         let item = arr[i];
//         let randomNumber = Math.round(Math.random(0, arr.length));
        
//         let temp = arr[randomNumber];
//         arr[randomNumber] = arr[i];
//         arr[i] = temp;
//     }

//     return arr;
// }

// console.log(shuffle(arr));


// // Task 11: get average age 
// // Write the function getAverageAge(users) that gets an array of objects with property age and returns the average age.

// let john = { name: "John", age: 25 };
// let pete = { name: "Pete", age: 30 };
// let mary = { name: "Mary", age: 29 };

// let arr = [ john, pete, mary ];

// const getAverageAge = arr => {
    
//     let sum = 0;
//     arr.forEach(item => sum += item.age);   
//     return sum / arr.length;
// }


// alert( getAverageAge(arr) ); // (25 + 30 + 29) / 3 = 28


// // Task 12: filter unique array members
// // Create a function unique(arr) that should return an array with unique items of arr.

// function unique(arr) {
//     let uniques = [];
//     outer: for (let i = 0; arr.length > i; i++) {
//         for (let j = i + 1; arr.length > j; j++) {
//             if (arr[i] === arr[j]) {
//                 continue outer;
//             }
//         }
//         uniques.push(arr[i]);
//     }

//     return uniques;
// }

// let strings = ["Hare", "Krishna", "Hare", "Krishna",
// "Krishna", "Krishna", "Hare", "Hare", ":-O"
// ];

// alert( unique(strings) ); // Hare, Krishna, :-O



// // Task 13: create keyed object from array

// let users = [
//     {id: 'john', name: "John Smith", age: 20},
//     {id: 'ann', name: "Ann Smith", age: 24},
//     {id: 'pete', name: "Pete Peterson", age: 31},
// ];
// const groupById = arr => {
//     return arr.reduce((item, value) => {
//         item[value.id] = value;
//         return item;
//     });
// }
// let usersById = groupById(users);
// console.log(usersById);

