"use strict";


//Nullish Coalscing operator '??'

// result = a ?? b;
// result = (a !== null && a !== undefined) ? a : blur;

// let user;
// alert(user ?? 'Anonymous');

// let firstName = null;
// let lastName = null;
// let nickName = "Supercoder";

// alert(firstName ?? lastName ?? nickName ?? "Anonymous");

// || returns first tuthy value 
// ?? returns first defined value

// let height = null;
// let width = null;
// let area = height ?? 100 * (width ?? 50);
// alert(area);

// Looping for || while || do-while

// let i = 0;
// for (; i < 3; i++) {
//   alert( i ); // 0, 1, 2
// }

// let i = 0;
// for (; i < 3;) {
//   alert( i++ ); // 0, 1, 2
// }

// let age = 0;
// while (true) {
//   let value = +prompt("Enter a number");
//   if (value <= 18) break;
//   age += value;
// }
// alert( 'Sum: ' + age );

// for (let i = 0; i < 5; i++) {
//     if (i % 2 == 0) continue;
//     alert(i); 
// }

// outer : for (let i = 0; i < 3; i++) {
//     inner : for (let j = 0; j < 3; j++) {
//       let input = prompt(`Value at coords (${i},${j})`, '');
//         if (!input) break outer; // (*)
//       }
//   }
//   alert('Done!');



// FUNCTION  

//function

// let username = "mani";

// function message() {
//   let username = "manish";
//   alert(username);
// } 

// message();
// alert(username);


// function sum(a, b) {
//   return a ** b;
// }

// let result = sum(5, 8);
// alert(result);

// const nothing = function () {
// }

// alert(nothing());


// function showPrimes(n) {

//   for (let i = 2; i < n; i++) {
//     if (!isPrime(i)) continue;

//     alert(i);  // a prime
//   }
// }

// function isPrime(n) {
//   for (let i = 2; i < n; i++) {
//     if ( n % i == 0) return false;
//   }
//   return true;
// }


// alert(showPrimes(9));

// function ask(qus, no) {
//   if(qus) yes();
//   else no();
// }

// let yes = function() {
//   alert("yes");
// }

// function no() {
//   alert("no");
// }

// alert(ask("This is a question"), function() {
//   alert("yes");
// }, no);

// function myDisplayer(some) {
//   console.log(some);
// }

// function myCalculator(num1, num2, mine) {
//   let sum = num1 + num2;
//   mine(sum);
// }

// myCalculator(4, 5, myDisplayer);



//   Objects copies


// let user = {
//   "name": "something"
// }
// let admin = user;

// admin.name = "defined";
// console.log(admin, user);

// let user = {
//   "name": "john",
//   "age": 19
// }

// let admin = {};
// for (let key in user) {
//   admin[key] = user[key];
// } //totally seperate object

// admin.name = "Michal"
// console.log(admin, user);

// let user = {
//   "name": "kush",
//   "age": 20
// };

// let id = {
//   "code": 2342,
//   "role": "admin"
// }

// let mix = {}
// Object.assign(mix, user, id);
// console.log(mix);


// function marry(man, woman) {
//   woman.husband = man;
//   man.wife = woman;

//   return {
//     father: man,
//     mother: woman
//   }
// }

// let family = marry({
//   "name": "John"
// }, {
//   "name": "Ann"
// });

// delete family.father;
// delete family.mother.husband;
// console.log(family);

// family = null;


// [1,2,3,4].forEach((item, index, array) => {
//   console.log(item, index, array);
// })

// let al = [1,3,4,5,6,7].find(item => {
//   item == 7 ? console.log(item) : console.log("not yet");
// });

// console.log(al);

// let users = [
//   {id: 1, name: "John"},
//   {id: 2, name: "Pete"},
//   {id: 3, name: "Mary"}
// ];

// let user = users.find(item => item.id == 1);
// console.log(user);
// alert(user.name); // John

//find : for one element
//filter : for many element
//map : for new array


// let lengths = ["Bilbo", "gandalf", "Nazgul"].map(item => item.length);

// console.log(lengths);

// let arr = ["sad", "sfd", "sdsd"].sort();
// console.log(arr);


// let arr = ["sad", "sadsa", "sdsd"].sort((a,b) => {
//   if (a.length > b.length) {
//     return 1;
//   }
//   if (a.length == b.length) {
//     return 0
//   }
//   if (a.length < b.length) {
//     return -1
//   }
// })

// console.log(arr);

// let arr = ["sds", "sdf", "sd"].join('we');
// console.log(arr);


//iterables

// let arrayLike = {
//   0: "hello",
//   1: "world",
//   length: 3
// }

// let arr = Array.from(arrayLike);
// console.log(arr);


// MAP

// let map = new Map();

// map.set('1', 'str1');
// map.set(1, "num1");
// map.set(true, "boot1");

// console.log(map);

// let map = new Map([
//   ["name", "kjsd"],
//   [true, "role"],
//   [0, "id"]
// ]);

// console.log(map.get(0));
// console.log(map.set(null, "YES"));
// // console.log(map.delete(true));
// console.log(map.size);
// console.log(map.has(null));

// for (let i of map.keys()) {
//   console.log(map.get(i));
// }

// let obj = {
//   name: "John",
//   age: 30
// };

// let map = new Map(Object.entries(obj));

// alert( map.get('name') ); // John


// let set = new Set();

// let john = { name: "John" };
// let pete = { name: "Pete" };
// let mary = { name: "Mary" };

// // visits, some users come multiple times
// set.add(john);
// set.add(pete);
// set.add(mary);
// set.add(john);
// set.add(mary);

// // set keeps only unique values
// alert( set.size ); // 3
// console.log(set);
// for (let user of set) {
//   alert(user.name)
// }


// let john = { name: "John" };

// let array = [john];

// john = null;

// console.log(array);
// console.log(john);
// let john = { name: "John"};

// let weakMap = new WeakMap();
// weakMap.set(john, "...");

// console.log(weakMap);

// // john = null;
// console.log(weakMap);

// console.log(weakMap.delete(john));


// DATE AND TIME

// let now = new Date();
// console.log(now);

// let dateNow = new Date(0);
// console.log(dateNow);

// let newDate = new Date(24 * 3600 * 1000);
// console.log(newDate);

// let date = new Date("1934-01");

// console.log(date);


// let date = new Date("2023-12-28");
// console.log(date);
// console.log(date.getFullYear());
// console.log(date.getMonth());
// console.log(date.getDate());
// console.log(date.getHours());
// console.log(date.getMinutes());


// let today = new Date();

// // today.setHours(0);
// console.log(today);

// today.setHours(22, 23, 12);
// console.log(today);


// let date = new Date(2016, 2, 28);
// date.setDate(date.getDate() + 2);

// console.log(date);

// let date = new Date();

// console.log(+date);


// let date1 = Date.parse('2012-01-26T13:51:50.417-07:00');
// console.log(date1);

// let date = new Date(date1);
// console.log(date);


//  JSON  

// let strudent = {
//     name: 'John',
//     age: 30,
//     isAdmin: false,
//     courses: ['html', 'css', 'js'],
//     wife: null
// }

// let json = JSON.stringify(strudent);
// console.log(json);


// console.log(JSON.stringify(1));
// console.log(JSON.stringify('test'));
// console.log(JSON.stringify(true));
// console.log(JSON.stringify([1, 2, 3]));

// let user = {
//     say() {
//         console.log("Somethings");
//     },
//     [Symbol("id")] : 123,
//     something: undefined
// };
// console.log(user);
// console.log(JSON.stringify(user));

// let meetup = {
//     title: "Conference",
//     room : {
//         number: 23,
//         participants: ["john", "ann"]
//     }
// }

// console.log(JSON.stringify(meetup));

// Riddle 
// let meetup = {
//     title: "Conference",
//     room : {
//         number: 23,
//         participants: ["john", "ann"],
//     }
// }

// meetup.place = meetup.room;
// meetup.room.occupiedBy = meetup;
// console.log(meetup);
// console.log(JSON.stringify(meetup));


// let room = {
//     number: 23
// };

// let meetup = {
//     title: "Conference",
//     participants: [{name: "John"}, {name: "Alice"}],
//     place: room
// };

// room.occupiedBy = meetup;
// console.log(JSON.stringify(meetup, ['title', 'participants', 'name', 'place', 'number']));


// let room = {
//     number: 34
// };

// let meetup = {
//     title: "Conference",
//     participants: [{name: "John"}, {name: "Alice"}],
//     place: room
// };

// room.occupiedBy = meetup;

// console.log( JSON.stringify(meetup, (key, value) => {
//     console.log(`${key} ${value}`);
//     return (key == 'occupiedBy') ? undefined : value;
// }));

// // third argument add spaces
// let user = {
//     name: "John",
//     age: 23,
//     roles: {
//         isAdmin: false,
//         isEditor: true
//     }
// };

// console.log(JSON.stringify(user, null, 2));

// let room = {
//     number: 23,
//     toJSON() {
//         return this.number;
//     }
// }

// console.log(room.toJSON());


//// JSON.parse 
// To decode a json string we need another method names JSON.parse

// let numbers = "[0, 1, 2, 3]";

// numbers = JSON.parse(numbers);
// console.log(numbers);

// let userData = '{ "name": "John", "age": 35, "isAdmin": false, "friends": [0,1,2,3] }';

// let user = JSON.parse(userData);

// console.log(( user.friends[1] )); // 1

// let str = '{"title":"Conference","date":"2017-11-30T12:00:00.000Z"}';
// let meetup = JSON.parse(str);

// console.log(meetup.date);
// console.log(new Date(meetup.date).getTime());

// let schedule = `{
//     "meetups": [
//       {"title":"Conference","date":"2017-11-30T12:00:00.000Z"},
//       {"title":"Birthday","date":"2017-04-18T12:00:00.000Z"}
//     ]
// }`;

// schedule = JSON.parse(schedule, function(key, value) {
//     console.log(key, value);
// })


// rest parameters and spread 


// const sumAll = (...args) => {
//     let sum = 0;

//     for (let arg of args) sum += arg;

//     return sum;
// }

// console.log(sumAll(2,4,5,6,7));


// function showName() {
//     console.log(arguments.length);
//     console.log(arguments[0]);
//     console.log(arguments[1]);
// }

// const showName = () => {
//     console.log(arguments.length);
//     console.log(arguments[0]);
//     console.log(arguments[1]);
// }

// showName("Julius", "Cassy");

// console.log(Math.max(1,2,4,5,6)); //6
// console.log(Math.max([1,2,4,5,6])); //NaN
// console.log(Math.max(...[1,2,4,5,6])); // 6

// console.log(Math.max(...[23, 34, 32], ...[90, 45, 23])); // 90
// console.log(Math.min(...[23, 34, 32], ...[90, 45, 23]));
// console.log(Math.max(..."9028340")); //9

// let arr = [1, 2, 3];

// let arrCopy = [...arr];
// let arrCopy1 = arr;
// console.log( arrCopy == arr);
// console.log(arrCopy1 == arr);


// Variable scope closure

// for (let i of [1, 2, 4]) {
//     console.log(i);
// }

// console.log(i);

// const check = () => {
//     let name = "John"

//     const print = () => {
//         // let name = "asd";
//         return name;
//     }

//     return print();
// }

// console.log(check());


// const makeCounter = () => {
//     let count = 0;

//     return () => {
//         return count++;
//     };
// }
// let counter  = makeCounter();
// console.log(counter());
// console.log(counter());
// console.log(counter());


// const f = () => {
//     let value = Math.random();

//     return () => {
//         console.log(value);
//     }
// }

// let arr = [f(), f(), f()];
// console.log(arr);


// const f = () => {
//     let value = Math.random();

//     const g = () => {
//         debugger;
//     }

//     return g;
// }

// let g = f();
// g();


// let value = 12;

// const f = () => {
//     let value = 23;

//     const g = () => {
//         debugger;
//     }

//     return g;
// }

// let g = f();
// g();


/// old var ///

// if (true) {
//     var name = "John";
// }

// console.log(name);

// for (var i = 0; i < 10; i++) {
//     console.log(i);
// }

// console.log(i);


// var name = "John";

// var name = "Kally";

// console.log(name);


// let sayHi = () => {
//     phrase = "Hello";

//     console.log(phrase);

//     var phrase;
// }

// sayHi();


// let sayHi = () => {
//     phrase = "Hello";

//     if (false) {
//         var phrase;
//     }

//     console.log(phrase);
// }

// sayHi();

// Ways to create IIFE

// (() => {
//     console.log("Somethings");
// })();

// (function() {
//     console.log("Somethings");
// }());

// !function() {
//     console.log("Somethings");
// }();

// + function() {
//     console.log("Somethings");
// }();



/// Global object ///


// window.console.log("somethings");
// global.gVar = 5;
// let = 

// console.log(global.gVar);

// let currentUser = {
//     name: "John"
// };

// console.log(currentUser.name);
// console.log(window.currentUser.name);


// if (window.Promise) {
//     console.log("Somethings");
// }


/////   FUnction object    ///////

// const sayHi = () => {
//     console.log("HI");
// }

// console.log(sayHi.name);
// console.log(sayHi.length);
// console.log(sayHi.call());
// console.log(sayHi.arguments);


// function ask(question, ...handlers) {
//     let isYes = process.argv[2];
  
//     for(let handler of handlers) {
//       if (handler.length == 0) {
//         if (isYes) handler();
//       } else {
//         handler(isYes);
//       }
//     }
  
//   }
  
//   // for positive answer, both handlers are called
//   // for negative answer, only the second one
//   ask("Question?", () => console.log('You said yes'), result => console.log(result));


// function syaHi() {
//     console.log("Hi");

//     syaHi.counter++;
// }

// syaHi.counter = 0;

// syaHi();
// syaHi();

// console.log(`Called ${syaHi.counter} items`);

// function makeCounter() {

//     function counter() {
//         return counter.count++;
//     }

//     counter.count = 0;

//     return counter;
// }

// let counter = makeCounter();
// counter.count = 10;
// console.log(counter());
// console.log(counter());

// let sayHi = function func(who) {
//     if (who) {
//         console.log(`Hey ${who}`);
//     } else {
//         sayHi("Guest");
//     }
// };

// console.log(sayHi());



// let timeId = setTimeout(() => console.log('hey'), 1000);
// clearTimeout(timeId)

// let timerId = setTimeout(() => console.log("never happens"), 1000);
// console.log(timerId); 

// clearTimeout(timerId);
// console.log(timerId); 


//// SET INTERVAL ///

// let timeId = setInterval(() => console.log('tick'), 1000);

// setTimeout(() => clearInterval(timeId), 5000);


// let timeId = setTimeout(function tick() {
//     console.log('tick');
//     timeId = setTimeout(tick, 2000);
// }, 2000);


// let start = Date.now();
// let times = [];

// setTimeout(function run() {
//   times.push(Date.now() - start); 

//   if (start + 100 < Date.now()) console.log(times); 
//   else setTimeout(run); 
// });


//  Decorators and forwarding, call/appy


// function slow(x) {

//   console.log(`Called with ${x}`);
//   return x;
// }

// function catchingDecorator(func) {
//   let cache = new Map();

//   return function(x) {
//     if (cache.has(x)) {
//       return cache.get(x);
//     }

//     let result = func(x);

//     cache.set(x, result);
//     return result;
//   };
// }

// slow = catchingDecorator(slow);
// console.log( slow(1) );
// console.log( "Agian: " + slow(1));
// console.log( slow(2) );


/// decorator for objects

// let worker = {
//   someMethod() {
//     return 1;
//   },

//   slow(x) {
//     console.log("Called with " + x);
//     return x * this.someMethod(); // (*)
//   }
// };

// function catchingDecorator(func) {

//   let cache = new Map();

//   return function(num) {
//     if (cache.has(num)) {
//       return cache.get(num);
//     }
//     let result = func.call(this, num);

//     cache.set(num, result);

//     return result;
//   }
// }

// worker.slow = catchingDecorator(worker.slow);

// console.log(worker.slow(2));


// let worker = {
//   slow(min, max) {
//     console.log(`Called with ${min} , ${max}`);
//     return min + max;
//   }
// };

// function catchingDecorator(func, hash) {

//   let cache = new Map();

//   return function() {
//     let key = hash(arguments)
//     if (cache.has(key)) {
//       return cache.get(key);
//     }

//     let result = func.call(this, ...arguments);

//     cache.set(key, result);
//     return result;
//   }
// };

// function hash(args) {
//   return args[0] + ',' + args[1];
// }

// worker.slow = catchingDecorator(worker.slow, hash);

// console.log(worker.slow(6, 7));




// function sayHi() {
//   console.log(this.name);
// }

// let user = { name: "John" };
// let admin = { name: "Admin" };

// sayHi.call( user );
// sayHi.call( admin );



//// Arrow functions //////

// let group = {
//   title: "Our Group",
//   students: ['John', 'Pete', 'Alice'],

//   showList() {
//     this.students.forEach(
//       student => console.log(this.title + ': ' + student)
//     );
//   }
// };

// group.showList();

// function defer(f, ms) {
//   return function() {
//     setTimeout(() => f.apply(this, arguments), ms);
//   };
// }

// function sayHi(who) {
//   console.log('Hello, ' + who);
// }

// let sayHiDeferred = defer(sayHi, 2000);

// sayHiDeferred('John');


// function defer(f, ms) {
//   return function(...args) {
//     let ctx = this;
//     setTimeout(function() {
//       return f.apply(ctx, args);
//     }, ms);
//   };
// }

// function sayHi(who) {
//   console.log('Hello, ' + who);
// }

// let sayHiDeferred = defer(sayHi, 2000);

// sayHiDeferred('John');


///////////   BIND    ////////

// let user = {
//   firstName: "John",
//   sayHi() {
//     console.log(`Hello, ${this.firstName}!`);
//   }
// };

// // setTimeout(user.sayHi, 1000); // Hello, undefined!


// setTimeout(() => user.sayHi(), 1000);


// user = {
//   sayHi() {console.log("Another user in setTimeout");}
// }

// let user = {
//   firstName: "John"
// };

// function func() {
//   console.log(this.firstName);
// }

// let funcUser = func.bind(user);

// funcUser();

// let user = {
//   firstName: "John"
// }

// function func(phrase) {
//   console.log(phrase + ' ' + this.firstName);
// }

// let funcUser = func.bind(user);

// funcUser("hello");

// let user = {
//   firstName: "John",
//   sayHi() {
//     console.log(`Hello, ${this.firstName}!`);
//   }
// }

// let sayHi = user.sayHi.bind(user);

// sayHi();

// setTimeout(sayHi, 1000);


// user = {
//   sayHi() {console.log("Another function");}
// }

// function mul(a, b) {
//   return a * b;
// }

// let double = mul.bind(null, 2);

// console.log( double(3) );
// console.log( double(4) );
// console.log( double(5) );

// function partial(func, ...argsBound) {
//   return function(...args) {
//     return func.call(this, ...argsBound, ...args);
//   }
// }

// let user = {
//   firstName: 'John',
//   say(time, phrase) {
//     console.log(`[${time}] ${this.firstName}: ${phrase}!`);
//   }
// };

// user.sayNow = partial(user.say, new Date().getHours() + ':' + new Date().getMinutes())

// user.sayNow("hello");


// let group = {
//   title: "Our Group",
//   students: ["John", "Pete", "Alice"],

//   showList() {
//     this.students.forEach(
//       student => {
//         console.log(this);
//         console.log(this.title + ': ' + student)
//       }
//     );
//   }
// };

// group.showList();





/////  Property descriptor

// let descriptor = Object.getOwnPropertyDescriptor({name: "john"}, "name");
// descriptor.writable = false;

// console.log(descriptor);


// let user = {};

// Object.defineProperty(user, "name", {
//   value: "John", writable: false
// });

// let descriptor = Object.getOwnPropertyDescriptor(user, 'name');

// console.log(descriptor);
// console.log(user.values);
// // Object.defineProperty(user, "name", {
// //   value: "John", writable: true
// // });
// console.log(user.name);
// user.name = "jksdf";

// let user = {
//   name: 'John',
//   toString() {
//     return this.name;
//   }
// };

// Object.defineProperty(user, "name", {
//   writable: true,
//   enumerable: false
// })
// for (let key in user) console.log(user[key] = "fals");

// console.log(user);


// Math.PI = 3;


// let user = {
//   name: "John"
// };

// Object.defineProperty(user, "name", {
//   writable: false,
//   configurable: false
// });

// user.name = "Pete";
// delete user.name;
// Object.defineProperty(user, "name", { value: "Pete" });


// const user = {}

// Object.defineProperties(user, {
//   name: { value: "John", writable: false },
//   surname: { value: "Smith", writable: false },
// });

// user.name = "John";


// let user = {}

// let clone = Object.defineProperties({}, Object.getOwnPropertyDescriptors(user));

// for (let key in user) {
//   clone[key] = user[key]
// }

// console.log(clone);

// let user = {}

// Object.preventExtensions(user); /// forbids the addition of new properties

// Object.seal(user);  //  forbids adding and remove of properties

// Object.freeze(user);

// console.log(Object.isExtensible(user));

// Object.defineProperty(user, "name", {
//   value: "John",
//   writable: true
// })

// console.log(user.name);


// let user = {
//   name: "John",
//   surname: "Smith",

//   get fullName() {
//     return `${this.name} ${this.surname}`
//   },

//   set changeName(name) {
//     this.name = name.split(' ')[0];
//     this.surname = name.split(' ')[1];
//   }
// }


// console.log(user.fullName);
// console.log(user.changeName = "Kelly");
// user.changeName = "keylly Jackson"
// console.log(user.fullName);


// let user = {
//   name: "John",
//   surname: "Smith"
// };

// Object.defineProperty(user, 'fullName', {
//   get() {
//     return `${this.name} ${this.surname}`;
//   },

//   set(value) {
//     [this.name, this.surname] = value.split(" ");
//   }
// });

// console.log(user.fullName);
// user.fullName = "Kally Jackson";
// console.log(user);

// for (let key in user) console.log(key);


// let user = {
//   get name() {
//     return this._name;
//   },

//   set name(value) {
//     if (value.length < 4) {
//       console.log("Name is too short, need at least 4 characters");
//       return;
//     }
//     this._name = value;
//   }
// };

// user.name = "Pete";
// console.log(user.name);

// user.name = "";

// function User(name, birthday) {
//   this.name = name;
//   this.birthday = birthday;

//   // age is calculated from the current date and birthday
//   Object.defineProperty(this, "age", {
//     get() {
//       let todayYear = new Date().getFullYear();
//       return todayYear - this.birthday.getFullYear();
//     }
//   });
// }

// let john = new User("John", new Date(1992, 6, 1));

// console.log(john.birthday ); // birthday is available
// console.log( john.age );      // ...as well as the age

// let user = {

//   get names() {
//     return this.name;
//   }
// };


// Object.defineProperties(user, {"name": {value: "John"}, "age": {value: 14}})



// console.log(user)
// console.log(user.name);


// console.log(user.names);




///  Prototypal inheritance  ///



// let animal = {
//   eats: true
// };

// let rabbit = {
//   jumps: false
// };

// rabbit.__proto__ = animal;

// console.log(rabbit.jumps);


// let animal = {
//   walks: () => {
//     console.log("It walks");
//   }
// }

// let rabbit = {
//   walks: "Yes",

//   get walks() {
//     console.log("Yup it does");
//   }
// }

// rabbit.__proto__ = animal;

// rabbit.walks;
// rabbit.walks()


// let user = {
//   name: "John",
//   surname: "Smith",

//   set fullName(value) {
//     [this.name, this.surname] = value.split(" ");
//   },

//   get fullName() {
//     return `${this.name} ${this.surname}`;
//   }
// };


// let admin = {
//   __proto__: user,
//   isAdmin: true,

//   get nameValue() {
//     console.log(this.name);  // undefined
//   }
// };

// console.log(admin.fullName);

// admin.fullname = "Alice Cooper";

// console.log(admin.fullName);
// console.log(user.fullName);
// console.log(admin.nameValue);


// let animal = {
//   walk() {
//     if (!this.isSleeping) {
//       console.log('I Walk');
//     }
//   },

//   sleep() {
//     this.isSleeping = true
//   }
// };

// let rabbit = {
//   name: "White Rabbit",
//   __proto__: animal
// }

// rabbit.sleep();
// animal.sleep();
// console.log(rabbit.isSleeping);
// console.log(animal.isSleeping);


// let animal = {
//   eats: true
// };

// let rabbit = {
//   jumps: true,
//   __proto__: animal
// };

// console.log(Object.keys(rabbit));

// for (let prop in rabbit) {

//   let isOwn = rabbit.hasOwnProperty(prop);

//   if (isOwn) {
//     console.log(`Our: ${prop}`);
//   } else {
//     console.log(`Inherited: ${prop}`);
//   }
//   console.log(prop);

// }



// function prototype


// let animal = {
//   eats: true
// };

// function Rabbit(name) {
//   this.name = name;
// }

// Rabbit.prototype = animal;

// let rabbit = new Rabbit("White Rabbit"); 
// let rabbit1 = new rabbit.constructor("Black rabbit");

// console.log( rabbit.eats );
// console.log( rabbit1.name );


// function Rabbit() {}

// Rabbit.prototype = {
//   jumps: true
// };

// let rabbit = new Rabbit();
// console.log(rabbit.contructor 

// function Person(first, last, age, eyecolor) {
//   this.firstName = first;
//   this.lastName = last;
//   this.age = age;
//   this.eyeColor = eyecolor;
// }

// Person.prototype.nationality = "English";

// function Rabbit() {}

// Rabbit.prototype = {
//   jumps: true
// };

// let rabbit = new Rabbit();
// console.log(rabbit.constructor === Rabbit);

// let obj = {};

// console.log(obj.__proto__ === Object.prototype);

// console.log(obj.toString === obj.__proto__.toString); 
// console.log(obj.toString === Object.prototype.toString);


// let arr = [1, 3, 5];

// console.log(arr.__proto__ === Array.prototype);
// console.log(arr.__proto__.__proto__ === Object.prototype);

// function Rabbit() {}
// Rabbit.prototype = {
//   jumps: true,
//   constructor: Rabbit
// }
// // Rabbit.prototype = { constructor: Rabbit }

// let rabbit = new Rabbit();

// console.log(rabbit.constructor === Rabbit);


// let animal = {
//   eats: true
// };

// let rabbit = Object.create(animal);

// console.log(rabbit.eats);

// console.log(Object.getPrototypeOf(rabbit) ===  animal);

// Object.setPrototypeOf(rabbit, {});

// console.log(Object.getPrototypeOf(rabbit) ===  animal);


// let obj = {};

// let key = prompt("What's the key?", "__proto__");
// obj[key] = "some value";

// console.log(obj[key]);




//// private protected properties methods

// class CoffeeMachine {
    
//     constructor(power) {
//         this._power = power;
//     }

//     get power() {
//         return this._power;
//     }
// }

// let coffeeMachine = new CoffeeMachine(122);

// console.log(coffeeMachine._power);
// coffeeMachine._power = 500
// console.log(coffeeMachine.power);

// class CoffeMachine {
//     _waterLimit = 100;
//     waterLimit = 100;
//     #waterLimit = 200;

//     #fixWaterAmount(value) {
//         if (value < 0) return 0;
//         if (value > this.#waterLimit) return this.#waterLimit;
//     }

//     setWaterAmount(value) {
//         this.#waterLimit = this.#fixWaterAmount(value);
//     }
// }

// let coffeeMachine = new COffeeMachine();

// // coffeeMachine.#fixWaterAmount(123);  // ERROR
// // coffeeMachine.#waterLimit = 100; // ERROR




///   Extending build in classes

// class PowerArray extends Array {
//     isEmpty() {
//         return this.length === 0 ? 0 : this.length;
//     }
// }

// let arr = new PowerArray(1,2,3,4,5,6,7);
// console.log(arr.isEmpty());

// let filteredArr = arr.filter(item => item >= 10);
// console.log(filteredArr);
// console.log(filteredArr.isEmpty());


//// MIXIN ////

// let sayHiMixin = {
//     syaHi() {
//         console.log(`Hello ${this.name}`);
//     },
//     sayBye() {
//         console.log(`Bye ${this.name}`);
//     }
// };

// class User {

//     constructor(name) {
//         this.name = name;
//     }
// }

// Object.assign(User.prototype, sayHiMixin);

// new User("Dobby").syaHi();



// // inheriting mixins from extended class

// let sayHiMixin = {
//     syaHi() {
//         console.log(`Hello ${this.name}`);
//     },
//     sayBye() {
//         console.log(`Bye ${this.name}`);
//     }
// };

// class Person {
//     constructor(name) {
//         this.name = name;
//     }
// }

// Object.assign(Person.prototype, sayHiMixin);

// class User extends Person {

//     constructor(name) {
//         super();
//         this.name = name;
//     }
// }


// new Person("Dobby").syaHi();
// new User("Waldamort").syaHi();


// extending mixin linked class to another class

// let sayHiMixin = {
//     syaHi() {
//         console.log(`Hello ${this.name}`);
//     },
//     sayBye() {
//         console.log(`Bye ${this.name}`);
//     }
// };

// class User {

//     constructor(name) {
//         this.name = name;
//     }
// }

// class Person extends User {
//     constructor(name) {
//         super();
//         this.name = name;
//     }
// }

// Object.assign(User.prototype, sayHiMixin);

// new User("Dobby").syaHi();

// new Person("some").syaHi();


