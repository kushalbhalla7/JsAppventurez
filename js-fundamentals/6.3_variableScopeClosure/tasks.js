"use strict";


// //  Task 1: Does a function pickup latest changes?
// // The function sayHi uses an external variable name. When the function runs, which value is it going to use?

// let name = "John";

// const sayHi = () => {
//     console.log("Hi, " + name);
// }

// name = "Pete";

// sayHi(); //  Hi Pete  :  becuase name's value has been changed before calling the function


// // Task 2: Which variables are available? 
// // Which value it will show? “Pete” or “John”?

// //function which returns a fucntion to log name
// const makeWorker = () => {
//     let name = "Pete";

//     return () => {
//         console.log(name);
//     };
// }

// //change name's value
// let name = "John";

// //create a function
// let work = makeWorker();

// //call it
// work(); // Pete : to log name, first it finds inside lexical enviornment


// // Task 3: Are counters independent?
// // Here we make two counters: counter and counter2 using the same makeCounter function.
// // Are they independent? What is the second counter going to show? 0,1 or 2,3 or something else?


// const makeCounter = () => {
//     let count = 0;

//     return () => {
//         return count++;
//     };
// }

// let counter = makeCounter();
// let counter2 = makeCounter();

// console.log( counter() ); // 0
// console.log( counter() ); // 1

// console.log( counter2() ); //0
// console.log( counter2() ); //1  :  because counter2 gets different reference so in case have different lexical enviornment

// // to get 0, 1, 2, 3, have pass same reference 
// // counter2 = counter;


// // Task 4: counter object
// // will it work? what will it show?

// function Counter() {
//     let count = 0;

//     this.up = () => {
//         return ++count;
//     };
//     this.down = () => {
//         return --count;
//     };
// }
  
// let counter = new Counter();

// console.log( counter.up() ); // 1
// console.log( counter.up() ); // 2
// console.log( counter.down() ); // 1 : because they share same outer lexical enviornment


// // Task 5: Function in if
// // Look at the code. What will be the result of the call at the last line?

// let phrase = "Hello";

// if (true) {
//     let user = "John";

//     const sayHi = () => {
//         console.log(`${phrase}, ${user}`);
//     }
// }

// sayHi(); // sayHi is not defined : because sayHi is only visible inside if


// // Task 6: sum with closures
// // Write function sum that works like this: sum(a)(b) = a+b.

// const sum = (num) => {

//     let a = num;
//     return (b) => {
//         if (isFinite(a) && isFinite(b)) {
//             console.log(+a + +b);
//         } else {
//             console.log("Pass interger value");
//         }
//     }
// }

// sum("8")(5); // 13
// sum(3)(-4); // -1


// // Task 7: is variable visible
// // what will be the result of this code

// let x = 1;

// const func = () => {
//     console.log(x);

//     let x = 2;
// }

// func(); // x cannot be accessed before its intialization


// // Task 8: filter through function

// //function which returns in between value 
// const inBetween = (a, b) => {
//     return (value, index) => {
//         return value >= a && value <=b;
//     }
// }

// //function which returns included value
// const inArray = (arr) => {
//     return (value, index) => {
//         if (arr.includes(value)) return value;
//     }
// } 

// //sample arry
// let arr = [1, 2, 3, 4, 5, 6, 7];

// // calling function inside arr filter methode
// console.log( arr.filter(inBetween(3, 6)) ); // 3,4,5,6
// console.log( arr.filter(inArray([1, 2, 10])) ); // 1,2


// // Task 9: sort by field

// //sample object
// let users = [
//     { name: "John", age: 20, surname: "Johnson" },
//     { name: "Pete", age: 18, surname: "Peterson" },
//     { name: "Ann", age: 19, surname: "Hathaway" }
// ];

// //function which sort users object 
// const byField = (str) => {
//     return (a, b) => {
//         return a[str] > b[str] ? 1 : -1;
//     }
// }

// // passing byField function inside sort method
// users.sort(byField('name'));
// // print sorted users object
// console.log(users); 


// Task 10: Array of functions
// Every function is meant to output its number. But something is wrong…

// function makeArmy() {
//     let shooters = [];
  
//     let i = 0;
//     while (i < 10) {
//       let shooter = function() { // create a shooter function,
//         console.log(i); // that should show its number
//       };
//       shooters.push(shooter); // and add it to the array
//       i++;
//     }
  
//     // ...and return the array of shooters
//     return shooters;
// }
  
// let army = makeArmy();

// army[0]();  //10  : because they show i's latest value which is 10 from outer lexical
// army[1]();  //10
// army[2]();  //10

//// corrected code

function makeArmy() {
    let shooters = [];

    let i =0;
    while (i < 10) {
        let j = i;
        let shooter = function() {
            console.log( j ); // now it could find j value in own lexical environment
        };
        shooters.push(shooter);
        i++;
    }
  
    // for (let i = 0; i < 10; i++) {
    //     let shooter = function() { // create a shooter function,
    //         console.log(i); // that should show its number
    //     };
    //     shooters.push(shooter); // and add it to the array
    // }
      return shooters;
}
  
let army = makeArmy();

army[0]();  //0
army[1]();  //1
army[2]();  //2

