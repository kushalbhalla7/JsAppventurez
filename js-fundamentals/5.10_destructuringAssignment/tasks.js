"use strict";


// // Task 1: Destructuring assignment

// let user = {
//     name: "John",
//     years: 30
// }

//destructuring of object
// let {name, years: age, isAdmin="false"} = user;

// console.log(name);
// console.log(age);
// console.log(isAdmin);



// Task 2: The maximal salary

let salaries = {
    "john": 100,
    "Pete": 300,
    "Mary": 250
}

const topSalary = salariesObj => {

    let maxSalary = 0;
    let holderName = null;

    for (let [name, salary] of Object.entries(salariesObj)) {
        if (maxSalary < salary) {
            maxSalary = salary;
            holderName = name;
        }
    }

    return holderName
}

console.log(topSalary(salaries));