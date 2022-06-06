"use strict";


// Task 1: filter unique array members

// const unique = arr => {
//     // let set = new Set();
//     // outer: for (let i = 0; arr.length > i; i++) {
//     //     for (let j = i + 1; arr.length > j; j++) {
//     //         if (arr[i] === arr[j]) {
//     //             continue outer;
//     //         }
//     //     }
//     //     set.add(arr[i]);
//     // }

//     // return set;

//     return Array.from(new Set(arr));
// }

// let values = ["Hare", "Krishna", "Hare", "Krishna",
//   "Krishna", "Krishna", "Hare", "Hare", ":-O"
// ];

// console.log( unique(values));


// // Task 2: filter anagrams

// let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];
// const aclean = arr => {
//     let obj = {};
    
//     for (let item of arr) {
//         let sortedItem = item.toLowerCase().split('').sort().join('');
//         obj[sortedItem] = item;
//     }
//     return Object.values(obj)
// }
// console.log( aclean(arr) );


// // Task 3: iterable keys

// let map = new Map();
// map.set("name", "John");
// let keys = [...map.keys()];
// keys.push("more");

// console.log(keys);