"use strict"

// Task 4:  Rewrite this if using the conditional operator '?':

//task in if else
let a = 5, b = 4;
let result;

if (a + b < 4) {
  result = 'Below';
} else {
  result = 'Over';
}
alert(result);

//peforme the same task using conditional operator '?'

let result1;

result1 = (a + b < 4) ? 'Below' : 'Over';
alert(result);
