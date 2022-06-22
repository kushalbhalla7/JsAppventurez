
// let target = {};
// let proxy = new Proxy(target, {});

// proxy.test = 5;
// console.log(target.test);
// console.log(proxy.test);

// for (let key in proxy) console.log(key);


// const target = {
//   message1: "hello",
//   message2: "everyone"
// };

// const handler2 = {
//   // get(target, prop, receiver) {
//   //   return "world";
//   // }
//   set(target, prop, receiver) {
//     target.message1 = "nothing";
//   }
// };

// const proxy2 = new Proxy(target, handler2);

// console.log(target);
// console.log(proxy2.message1);
// console.log(proxy2.get());

// let numbers = [0, 1, 2];

// numbers = new Proxy(numbers, {
//   get(target, prop) {
//     if (prop in target) {
//       return target[prop];
//     } else {
//       return 0; // default value
//     }
//   }
// });

// console.log( numbers[1] ); // 1
// console.log( numbers[123] ); // 0 (no such item)

// let dictionary = {
//     'Hello': 'Hola',
//     'Bye': 'Adiós'
//   };
  
//   dictionary = new Proxy(dictionary, {
//     get(target, prop) {
//       if (prop in target) {
//         return target[prop];
//       } else {
//         return prop;
//       }
//     }
//   })
  
//   console.log( dictionary['Hello'] ); // Hola
//   console.log( dictionary['Welcome to Proxy']);


// let role = {
//     status: 'Black'
// }

// let student = {
//     __proto__: role,
//     name: 'John'
// }


// student = new Proxy(student, {
//     get(target, prop) {
//         if (prop in target) {
//             return target[prop];
//         } else {
//             return `Not Found ${prop}`;
//         }
//     }
// });

// console.log(student.__proto__);
// console.log(student.status);

// let numbers = [];

// numbers = new Proxy(numbers, { // (*)
//   set(target, prop, val) { // to intercept property writing
    
//     if (typeof val == 'number') {
//       target[prop] = val;
//       return true;
//     } else {
//       return false;
//     }
//   }
// });

// numbers.push(1); // added successfully
// numbers.push(2); // added successfully
// console.log("Length is: " + numbers.length); // 2

// numbers.push("test"); // Type
// console.log("This line is never reached (error in the line above)");

// let user = {
//     name: "John",
//     age: 30,
//     _password: "***"
//   };
  
//   user = new Proxy(user, {
//     ownKeys(target) {
//       return Object.keys(target).filter(key => !key.startsWith('_'));
//     }
//   });
  
//   // "ownKeys" filters out _password
//   for(let key in user) console.log(key); // name, then: age
  
//   // same effect on these methods:
//   console.log( Object.keys(user) ); // name,age
//   console.log( Object.values(user) );


//   let range = {
//     start: 1,
//     end: 10
//   };
  
//   range = new Proxy(range, {
//     has(target, prop) {
//       return prop >= target.start && prop <= target.end;
//     }
//   });
  
//   console.log(5 in range); // true
//   console.log(50 in range);

//   let user = {
//     _name: "Guest",
//     get name() {
//       return this._name;
//     }
//   };
  
//   let userProxy = new Proxy(user, {
//     set(target, prop, receiver) {
//         target[prop] = receiver;
//       return target[prop];
//     }
//   });

//   userProxy._name = "Somethings";

//   console.log(userProxy.name);


