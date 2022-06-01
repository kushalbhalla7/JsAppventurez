"use strict";

// // converting the type of a value
// let value = true;
// alert(typeof value); //boolean 

// value = String(value);
// alert(typeof value); //string

// alert(String(true)); //true
// alert(String(null)); //null
// alert(String(NaN)); //Nan


// alert("6" / "3"); //2

// let age = Number("an arbitrary string instead of a number");
// alert(age); //NaN

// alert( Number(" 9834 ") ); //9834
// alert( Number("2384sd") ); // NaN cannot convert sd to a number
// alert( Number(true) ); // 1
// alert( Number(false) ); // 0

alert(Boolean(1)); // true
alert(Boolean(0)); // false

alert(Boolean("hello")); //true
alert(Boolean("")); //false

alert(Number("as is")); //NaN

let num;
alert(Number(num)); // undefined to number

