"use strict"

// || operator

// alert( true || true ); //true
// alert( true || false ); //true
// alert( false || true ); //true
// alert( false || false ); //true


// const gender = prompt('Enter your gender');
// const age = prompt('Enter your age, if you want to use this service');
// if(gender === 'female' || age > 60) {
//     alert("You are eligible for this service");
// } else {
//     alert("You are not eligible");
// }


// or "||" finds the first trythy value

// alert( 1|| 0);
// alert( null || 1);
// alert( null || 0 || 1);
// alert( null || undefined || 0);


// let firstName = "";
// let lastName = "";
// let nickName = "";
// alert( firstName || lastName || nickName || "Anonymous");


// true || alert("not printed");
// false || alert("printed");

// and "&&" 

// alert( true && true ); //true
// alert( true && false ); //false
// alert( false && true ); //false
// alert( false && false ); //false

// alert( 1 && 0);
// alert( null && 1);
// alert( null && 0 );
// alert( null && undefined && 0);


// let firstName = "";
// let lastName = "";
// let nickName = "";
// alert( firstName && lastName && nickName && "Anonymous");

// alert( 1 && 2 && null && 3);
// let x = 1;
// if (x > 0) alert('Greater than zero!');

// alert(!true);

//convert value to boolean
alert( !! "non-empty"); //true
alert( !! null); //false