"use strict"


//Nullish Coalscing operator '??'

// result = a ?? b;
// result = (a !== null && a !== undefined) ? a : blur;

// let user;
// alert(user ?? 'Anonymous');

// let firstName = null;
// let lastName = null;
// let nickName = "Supercoder";

// alert(firstName ?? lastName ?? nickName ?? "Anonymous");

// || returns first tuthy value 
// ?? returns first defined value

// let height = null;
// let width = null;
// let area = height ?? 100 * (width ?? 50);
// alert(area);

// Looping for || while || do-while

// let i = 0;
// for (; i < 3; i++) {
//   alert( i ); // 0, 1, 2
// }

// let i = 0;
// for (; i < 3;) {
//   alert( i++ ); // 0, 1, 2
// }

// let age = 0;
// while (true) {
//   let value = +prompt("Enter a number");
//   if (value <= 18) break;
//   age += value;
// }
// alert( 'Sum: ' + age );

// for (let i = 0; i < 5; i++) {
//     if (i % 2 == 0) continue;
//     alert(i); 
// }

// outer : for (let i = 0; i < 3; i++) {
//     inner : for (let j = 0; j < 3; j++) {
//       let input = prompt(`Value at coords (${i},${j})`, '');
//         if (!input) break outer; // (*)
//       }
//   }
//   alert('Done!');



// FUNCTION  

//function

// let username = "kushal";

// function message() {
//   let username = "manish";
//   alert(username);
// } 

// message();
// alert(username);


// function sum(a, b) {
//   return a ** b;
// }

// let result = sum(5, 8);
// alert(result);

// const nothing = function () {
// }

// alert(nothing());


// function showPrimes(n) {

//   for (let i = 2; i < n; i++) {
//     if (!isPrime(i)) continue;

//     alert(i);  // a prime
//   }
// }

// function isPrime(n) {
//   for (let i = 2; i < n; i++) {
//     if ( n % i == 0) return false;
//   }
//   return true;
// }


// alert(showPrimes(9));

// function ask(qus, no) {
//   if(qus) yes();
//   else no();
// }

// let yes = function() {
//   alert("yes");
// }

// function no() {
//   alert("no");
// }

// alert(ask("This is a question"), function() {
//   alert("yes");
// }, no);

// function myDisplayer(some) {
//   console.log(some);
// }

// function myCalculator(num1, num2, mine) {
//   let sum = num1 + num2;
//   mine(sum);
// }

// myCalculator(4, 5, myDisplayer);



//   Objects copies


// let user = {
//   "name": "something"
// }
// let admin = user;

// admin.name = "defined";
// console.log(admin, user);

// let user = {
//   "name": "john",
//   "age": 19
// }

// let admin = {};
// for (let key in user) {
//   admin[key] = user[key];
// } //totally seperate object

// admin.name = "Michal"
// console.log(admin, user);

// let user = {
//   "name": "kush",
//   "age": 20
// };

// let id = {
//   "code": 2342,
//   "role": "admin"
// }

// let mix = {}
// Object.assign(mix, user, id);
// console.log(mix);


function marry(man, woman) {
  woman.husband = man;
  man.wife = woman;

  return {
    father: man,
    mother: woman
  }
}

let family = marry({
  "name": "John"
}, {
  "name": "Ann"
});

delete family.father;
delete family.mother.husband;
console.log(family);

family = null;