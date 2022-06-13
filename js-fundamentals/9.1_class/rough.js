/////////     CLASS     ////////


// class User {

//     constructor(name) {
//         this.name = name;
//     }

//     sayHi() {
//         console.log(this.name);
//     }
// }

// let user = new User("john");
// user.sayHi();

// console.log(typeof User);


// class User {
//     constructor(name) {this.name = name;}

//     sayHi() {
//         console.log(this.name);
//     }
// }

// console.log(User.prototype.constructor === User);
// console.log(User.prototype.sayHi);
// console.log(Object.getOwnPropertyNames(User.prototype));


// // class in expression

// let User = class {

//     constructor(name) {
//         this.name = name;
//     }

//     sayHi() {
//         console.log(this.name);
//     }
// }

// let user = new User("Rabbit");
// console.log(user.name);
// user.sayHi();


// //  Names class

// let User = class MyClass {
//     sayHi() {
//       console.log(MyClass); 
//     }
//   };
  
//   new User().sayHi(); 
  
// //   console.log(MyClass);



////   getters/setters    ////

// class User {

//     constructor(name) {
//         this.name = name;
//     }

//     get name() {
//         return this._name;
//     }

//     set name(value) {
//         if(value.length > 5) {
//             this._name = value;
//         } else {
//             console.log("Too short");
//             return;
//         }
//     }


//     ['say' + 'hi']() {
//         console.log("hello");
//     }
// }

// new User().sayhi();


// let user = new User("John");
// console.log(user.name);

// user = new User("");

// class User {
//     name = "Rabbit";
// }

// let user1 = new User();
// let user2 = new User();

// console.log(user1.name);  // rabbit
// console.log(User.prototype.name);  //rabbit
// console.log(user2.name);  // rabbit


class Button {

    constructor(value) {
        this.value = value;
    }

    click = () => {
        console.log(this.value);
    }
}

let button = new Button("hello");

setTimeout(button.click, 1000);