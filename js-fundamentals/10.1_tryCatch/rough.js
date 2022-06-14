// "use strict";


/////  Error handling "try  catch"

// try {

//     // code
// } catch (err) {
//     // error handling
// }


// try {
//     i = 4;
//     console.log(`value of i ${i}`);
// } catch (err) {
//     console.log('I is not defined');
// }

// /// output : i is not defined

// try {
//     console.log("Start running");

//     name = "John";

//     console.log(name);
// } catch (err) {
//     console.log(err);
// }

// try {
//     setTimeout(function() {
//         noSuchVariable;
//     }, 1000);
// } catch (err) {
//     console.log("won't work");
// }


// // try and catch must be around exceptional statement
// setTimeout(function() {
//     try {
//         noSuchVariable;
//     } catch (err) {
//         console.log("not working", err);
//     }
// }, 1000);


// // error handling on json decoding

// let json = "{bad json}";

// try {
//     let user = JSON.parse(json);
//     console.log( user.name );
// } catch (err) {
//     console.log(err.name);
//     console.log(err.message);
// }


//// throwing our own errors

// let json = '{ "age": 30 }';

// try {

//     let user = JSON.parse(json);
//     console.log( user.name );
// } catch (err) {
//     console.log("Does't execute");
//     console.log(err);
// }


// let error = new Error("New Error");
// error.statusCode = 422;
// console.log(error.name);
// console.log(error.message);
// console.log(error.statusCode);


// let json = '{ "age": 30}';

// try {
//     let user = JSON.parse(json);

//     if (!user.name) {
//         throw new SyntaxError("Property not found");
//     }

//     console.log(user.name);
// } catch (err) {
//     console.log("Json Error: "+ err.message);
// }


//// Rethrowing ////

"use strict";

// let json = '{"age": 30}';

// try {
//     let user = JSON.parse(json);

//     if (!user.name) {
//         throw new SyntaxError("No Found");
//     }

//     blabla();

//     console.log( user.name );
// } catch (err) {
//     if (err instanceof SyntaxError) {
//         console.log('Json Error: ' + err.message);
//     } else {
//         throw err;
//     }
// }


// function readData() {
//     let json = '{ "age": 30 }';
  
//     try {
//       // ...
//       blabla(); // error!
//     } catch (err) {
//       // ...
//       if (!(err instanceof SyntaxError)) {
//         throw err; // rethrow (don't know how to deal with it)
//       }
//     }
// }
  
// try {
//     readData();
// } catch (err) {
//     console.log( "Esxternal catch got: " + err ); // caught it!
// }


// try {
//     console.log( 'try' );
//     if (confirm('Make an Error?')) BAD_CODE();
// } catch (err) {
//     console.log( 'catch' );
// } finally {
//     console.log( 'finally' );
// }


// let num = 77;

// let diff, result;

// function fib(n) {
//   if (n < 0 || Math.trunc(n) != n) {
//     throw new Error("Must not be negative, and also an integer.");
//   }
//   return n <= 1 ? n : fib(n - 1) + fib(n - 2);
// }

// let start = Date.now();

// try {
//   result = fib(num);
// } catch (err) {
//   result = 0;
// } finally {
//   diff = Date.now() - start;
// }

// console.log(result || "error occurred");

// console.log( `execution took ${diff}ms` );


function func() {

    try {
        name = "asd";
        return 1;
    } catch (err) {
        console.log(err.stack);
    } finally {
        console.log('finally');
    }
}

console.log(func());