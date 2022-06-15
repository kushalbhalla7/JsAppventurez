

////  Task 1: Strang instanceof  ////
// in the code below, why does instanceof return
// true? we can easily see that a is not created by B() 


function A() {}
function B() {}

A.prototype = B.prototype = {};
let a = new A();

console.log( a.__proto__); // {}
console.log(B.prototype); // {}
console.log( a instanceof B ); // true : because both prototype are empty object
