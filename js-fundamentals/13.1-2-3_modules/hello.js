// import {admin} from './user.js';
// admin.name = "Pete";

// alert(admin.name); // Pete
// console.log(admin.name);


// //  import calculateAge function to calculate age
// import { calculateAge } from './user.js';
// console.log(calculateAge('2001-10-09'));


// //import multiple values

// import {admin, calculateAge } from './user';


// // import all from another module

// import * as userModule from './user';


// // import value with different name

// import {admin as admin1}  from './user';

// import {default as User} from './user.js';

// let user1 = new User;
// // console.log(user1.fullName());



// ##### 13.3 modules dynamix imports #####

// let {hi, bye} = await import('./user.js');

// hi();
// bye();




  async function load() {
    let say = await import('./user.js');
    say.hi(); // Hello!
    say.bye(); // Bye!
    say.default(); // Module loaded (export default)!
  }

load();