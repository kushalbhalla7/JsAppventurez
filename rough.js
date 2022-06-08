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

// let username = "kushal";

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

let schedule = `{
    "meetups": [
      {"title":"Conference","date":"2017-11-30T12:00:00.000Z"},
      {"title":"Birthday","date":"2017-04-18T12:00:00.000Z"}
    ]
}`;

schedule = JSON.parse(schedule, function(key, value) {
    console.log(key, value);
})