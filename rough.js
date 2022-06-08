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






//////   SKIPPED  ////////











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


function defer(f, ms) {
  return function(...args) {
    let ctx = this;
    setTimeout(function() {
      return f.apply(ctx, args);
    }, ms);
  };
}

function sayHi(who) {
  console.log('Hello, ' + who);
}

let sayHiDeferred = defer(sayHi, 2000);

sayHiDeferred('John');

