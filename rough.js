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


function showPrimes(n) {

  for (let i = 2; i < n; i++) {
    if (!isPrime(i)) continue;

    alert(i);  // a prime
  }
}

function isPrime(n) {
  for (let i = 2; i < n; i++) {
    if ( n % i == 0) return false;
  }
  return true;
}


alert(showPrimes(9));