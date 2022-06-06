"use strict"

//different way of writing number;

let billion = 100000000;

let billion1 = 1_000_000_000;

let billion3 = 1e9;

console.log(billion, billion1, billion3);

let mcs = 1e-6;

1e-6 === 1/1000000; //true

// alert(0xff); //255
// alert(0xFF) //255


// let num = 80399584;
// console.log(num.toString(16));
// console.log(num.toString(2));

// let str = "kane";
// console.log(str.toString(2));

// //Rounding

// console.log(Math.floor(3.956)); //3
// console.log(Math.ceil(7.9)); //8
// console.log(Math.ceil(3.2)); //4
// console.log(Math.round(4.6));  //5

// let no = 1.24233;

// alert(Math.round((no * 100) / 100));
// let num = 153.34
// console.log( num.toFixed(0));

// console.log(1e500); //Infinity
// console.log(0.1 + 0.2 === 0.3); //false
// console.log(0.1 + 0.3 === 0.4); //true
// console.log(0.3 + 0.3 === 0.6);

// console.log( isFinite("15"));
// console.log( isFinite(Infinity));

// console.log( isFinite("sjdf"));

// console.log( parseInt('100kjsdf'));
// console.log( parseFloat('345.345jdfsf'));
// console.log( parseInt('12.3'));
// console.log( parseInt('sdfsdf'));
// console.log( parseInt("s23423"));

// console.log( Math.round(Math.random() * 1000));
console.log( Math.max(2,3,65, 3,3, 2,3));
console.log( Math.min(4,5,3,3, 3,3,2,2));
console.log( Math.trunc(3242.092384));