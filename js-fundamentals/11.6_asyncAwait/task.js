"use strict";


// //  Task 1: Rewrite using async/await

// // let loadJson = (url) => {
// //     return fetch(url)
// //         .then(response => {
// //             if (response.status == 200) {
// //                 return response.json();
// //             } else {
// //                 throw new Error(response.status);
// //             }
// //         });
// // }

// // loadJson('https://javascript.info/no-such-user.json')
// //     .catch(err => console.log(err))


// //// in async / await

// let loadJson = async (url) => {
    
//     let response = await fetch(url);

//     if (response.status == 200) {
//         return response.json();
//     }
//     throw new Error(response.status);
    
// }

// loadJson('https://javascript.info/no-such-user.json')
//     .catch(err => console.log(err))





// // Task 2: rewrite "rethrow" with async/await
// // Below you can find the “rethrow” example. Rewrite it using async/await instead of .then/catch.
// // And get rid of the recursion in favour of a loop in demoGithubUser: with async/await that becomes easy to do.

// // class HttpError extends Error {
// //     constructor(response) {
// //       super(`${response.status} for ${response.url}`);
// //       this.name = 'HttpError';
// //       this.response = response;
// //     }
// //   }
  
// //   function loadJson(url) {
// //     return fetch(url)
// //       .then(response => {
// //         if (response.status == 200) {
// //           return response.json();
// //         } else {
// //           throw new HttpError(response);
// //         }
// //       });
// //   }
  
// //   // Ask for a user name until github returns a valid user
// //   function demoGithubUser() {
// //     let name = prompt("Enter a name?", "iliakan");
  
// //     return loadJson(`https://api.github.com/users/${name}`)
// //       .then(user => {
// //         alert(`Full name: ${user.name}.`);
// //         return user;
// //       })
// //       .catch(err => {
// //         if (err instanceof HttpError && err.response.status == 404) {
// //           alert("No such user, please reenter.");
// //           return demoGithubUser();
// //         } else {
// //           throw err;
// //         }
// //       });
// //   }
  
// //   demoGithubUser();


// // in async/await

// class HttpError extends Error {
//     constructor(response) {
//         super(`${response.status} for ${response.url}`);
//         this.name = 'HttpError';
//         this.response = response;
//     }
// }

// let loadJson = async (url) => {

//     let response = await fetch(url);

//     if (response.status == 200) {
//         return response.json();
//     }
//     throw new Error(response.status);
    
// }

// let demoGithubUser = async () => {

//     let name = prompt("Enter a name?", "iliakan");
//     let user;

//     while(true) {
//         try {
//             user = await loadJson(`https://api.github.com/users/${name}`);
//             alert(`Full name: ${user.name}.`);
//             break;
//         } catch (err) {
//             if (err instanceof HttpError && err.response.status == 404) {
//                 alert("No such user, please reenter.");
//             } else {
//                 throw err;
//             }
//         }
//     }

//     return user;
// } 

// demoGithubUser();




// Task 3: call async from non-async 
// We have a “regular” function called f. How can you call the async function 
// wait() and use its result inside of f?


async function wait() {
    await new Promise(resolve => setTimeout(resolve, 1000));
    return 10;
}

function f() {

    // using then approach to handle promise here
    wait().then(result => console.log(result));
}

f(); // calling f function here