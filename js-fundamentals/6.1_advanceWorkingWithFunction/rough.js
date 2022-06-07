"use strict";

// calculate power by using resursion

// const pow = (a, n) => {
//     if (n == 1) {
//         return a;
//     } else {
//         return a * pow(a, n-1);
//     }
// }

// const pow = (a, n) => {
//     return n == 1 ? a : (a * pow(a, n-1));
// }

// console.log(pow(2, 10));


let company = { // the same object, compressed for brevity
    sales: [{name: 'John', salary: 1000}, {name: 'Alice', salary: 1600 }],
    development: {
      sites: [{name: 'Peter', salary: 2000}, {name: 'Alex', salary: 1800 }],
      internals: [{name: 'Jack', salary: 1300}]
    }
};

const sumSalaries = (department) => {
    if (Array.isArray(department)) {
        return department.reduce((prev, current) => prev + current.salary, 0);
    } else {
        let sum = 0;
        for (let i of Object.values(department)) {
            sum += sumSalaries(i);
        }
        return sum;
    }
}

console.log(sumSalaries(company));
console.log(sumSalaries([{name: 'John', salary: 1000}, {name: 'Alice', salary: 1600 }]));