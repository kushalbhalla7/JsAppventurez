"use strict";



/////////////  Async functions  //////////


// async function f() {
//     return 1;
// }

// console.log(f()); //1


// let f = async () => {
//     return Promise.resolve(1);
// }

// f().then(value => console.log(value)); //1


// const f = async () => {
//     let promise = new Promise((resolve, reject) => {
//         setTimeout(() => resolve("Done"), 1000)
//     });

//     let result = await promise;

//     console.log(result);
// }

// f();


// class Thenable {
//     constructor(num) {
//         this.num = num;
//     }
    
//     then(resolve, reject) {
//         console.log(resolve);

//         setTimeout(() => resolve(this.num * 2), 1000);
//     }
// }

// async function f() {

//     let result = await new Thenable(1);
// }



// async function f() {
//     await Promise.reject(new Error("Whoops!"));
// }

// console.log(f());

// async function f() {
//     throw new Error("Whoops!")
// }

// f();




// async function f() {

//     try {
//         let response =  await fetch();
//         return response;
//     } catch (err) {
//         console.log(err);
//     }
// }

// console.log(f());


async function f() {

    let response =  await setTimeout(() => resolve(4), 1000);
}

f().catch(value => console.log(value.name));