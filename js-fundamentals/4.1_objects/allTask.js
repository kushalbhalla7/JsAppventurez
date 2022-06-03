"use strict"

//Task 1: Hello Object
// let user = {};
// user.name = "John";
// user.surname = "Smith";
// user.name = "Pete";
// delete user.name;

// console.log(user);


//Task 2: sum obejct properties
// let salaries = {
//     John: 100,
//     Ann: 160,
//     Pete: 130
// }

// console.log(salaries.John + salaries.Ann + salaries.Pete);


//Task 3: Multiply numeric property values by 2
// Create a function multiplyNumeric(obj) that multiplies all numeric property values of obj by 2.

let menu = {
    width: 200,
    height: 300,
    title: "My menu"
}

mutiplyNumeric(menu);

function mutiplyNumeric(menu) {
    for(let item in menu) {
        if(!isNaN(+menu[item])) {
            menu[item] = menu[item] * 2;
        }
    }
}

console.log(menu);

