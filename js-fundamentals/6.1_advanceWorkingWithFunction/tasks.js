"use strict";


// Task 1: sum all numbers till the given one
//write a function sumTo(n) that calculates the sum of number 1 + 2 + ... + n


// // 1 variant using for loop

// const sumTo = (number) => {

//     if (isNaN(Number(number))) { // check for arg is number or not
//         return null;
//     }

//     let sum = 0;
//     for (let i = 0; number >= i; i++) {
//         sum += i;
//     }
//     return sum;
// }


// 2 variant using recursion

// const sumTo = (number) => {

//     if (number == 1) {
//         return 1;
//     } else {
//         return number + sumTo(number-1);
//     }
// }


// // 3 variant using airthmetic progression

// const sumTo = (number) => {
//     return (1 + number) * (number / 2);
// }

// console.log(sumTo("5")); // 15
// console.log(sumTo("sd")); //null



// // Task 2: calculate factorial

// const factorial = (number) => {
    
//     if (isNaN(Number(number))) { // check for arg is number or not
//         return "Argument is not a number";
//     } else if(number == 1) {
//         return 1;
//     } else {
//         return number * factorial(number -1);
//     }
// } 

// console.log(factorial(5)); // 120
// console.log(factorial("dsf")); // argument is not a number


// // Task 3: fibonacci number 

// const fib = (number) => {

//     let a = 1;
//     let b = 1;

//     if (isNaN(Number(number))) { // check for arg is number or not
//         return "Argument is not a number";
//     } else if (number == 1) {
//         return number;
//     } else {
//         for (let i = 3; number >= i; i++) {
//             let c = a + b;
//             a = b;
//             b = c;
//         }
//         return b;
//     }
// }

// console.log(fib(5)); //5


// Task 4: output a single-linked list


// // 1 variant using loop

// let list = {
//     value: 1,
//     next: {
//       value: 2,
//       next: {
//         value: 3,
//         next: {
//           value: 4,
//           next: null
//         }
//       }
//     }
// };

// // printList function that prints linked list
// const printList = list => {

//     do {
//         console.log(list["value"]);
//         list = list["next"];
//     } while (list);
// }

// printList(list);


// // 2 variant using recursion

// let list = {
//     value: 1,
//     next: {
//       value: 2,
//       next: {
//         value: 3,
//         next: {
//           value: 4,
//           next: null
//         }
//       }
//     }
// };

// // printList function that prints linked list
// const printList = list => {

//     if (list) {
//         console.log(list["value"]);
//         list = list["next"];
//         return printList(list);
//     }
// }

// printList(list);



// Task 5: output a single-linked list in the reverse order

// // 1 variant using loop

// let list = {
//     value: 1,
//     next: {
//       value: 2,
//       next: {
//         value: 3,
//         next: {
//           value: 4,
//           next: null
//         }
//       }
//     }
// };

// // printList function that prints linked list
// const printList = list => {

//     let arr = [];

//     do {
//         arr.push(list["value"]);
//         list = list["next"];
//     } while (list);
    
//     for (let i = arr.length - 1; i >= 0; i--) {
//         console.log(arr[i]);
//     }
// }

// printList(list);


// 1 variant using loop

let list = {
    value: 1,
    next: {
      value: 2,
      next: {
        value: 3,
        next: {
          value: 4,
          next: null
        }
      }
    }
};

// printList function that prints linked list
const printList = list => {

    if (list.next) {
        printList(list.next);
    }

    console.log(list.value);
}

printList(list);