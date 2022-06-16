

// Promise is special javascript object that links the "producing code" and the "consuming code" together. 
// "Producing code" takes time it need tp produce promised result
// and then promise makes that result available to subscribed code.

// let promise = new Promise(function(resolve, reject) {

// });

// console.log(promise);


// states :  "pending",  "fulfilled",  "rejected"
// initially state is pening
// on successfull resolve state is "fulfillef" and result is "value"
// on reject state is "rejected" and result is error


// // a successfull promise
// let promise = new Promise(function(resolve,reject) {
//     setTimeout(() => resolve("done"), 1000);
// });

// // a promise calling reject
// let promise = new Promise(function(resolve, reject) {
//     setTimeout(() => reject(new Error("Whoops!")), 1000)
// })

// let promise = new Promise(function(resolve, reject) {
//     resolve(123);
// });

// console.log(promise);



// let promise = new Promise(function(resolve, reject) {
//     setTimeout(() => resolve("done!"), 1000);
// //   reject(new Error("Something wrong"));
// });


// promise.then(
//     result => console.log(result),
//     error => console.log(error.message)
// )

// let promise = new Promise(resolve => {
//     setTimeout(() => resolve("done!"), 1000);
// });

// promise.then(value => console.log(value));

// let promise = new Promise((resolve, reject) => {
//     setTimeout(() => reject(new Error("Not done!")), 1000);
// });
// promise.catch(error => console.log(error));


// new Promise((resolve, reject) => {
//     throw new Error("Something wrong");
// })
// .finally(() => console.log("Promise ready"))
// .catch((err) => console.log(err));

let promise = new Promise(resolve => resolve("done!"));

promise.then(alert => console.log(alert));