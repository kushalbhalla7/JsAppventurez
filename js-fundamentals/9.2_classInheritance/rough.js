////   class inheritance   ////


// class Animal {

//     constructor(name) {
//         this.speed = 0;
//         this.name = name;
//     }

//     run(speed) {
//         this.speed = speed;
//         console.log(`${this.name} runs with speed ${this.speed}.`);
//     }

//     stop() {
//         this.speed = 0;
//         console.log(`${this.name} stands still.`);
//     }
// }


// class Rabbit extends Animal {

//     hide() {
//         console.log(`${this.name} hides!`);
//     }
// }


// let animal = new Animal("Cheeta");
// let rabbit = new Rabbit("Rabbit");
// animal.run(100);
// rabbit.run(14);
// animal.stop();
// rabbit.hide();



// function f(message) {
//     return class {
//         saiHi() { console.log(message);}
//     }
// }

// class User extends f("somethings") {}

// new User().saiHi();


// class Animal {

//     constructor(name) {
//         this.speed = 0;
//         this.name = name;
//     }

//     run(speed) {
//         this.speed = speed;
//         console.log(`${this.name} runs with speed ${this.speed}.`);
//     }

//     stop() {
//         this.speed = 0;
//         console.log(`${this.name} stands still.`);
//     }
// }


// class Rabbit extends Animal {

//     constructor(...args) {
//         super(...args);
//     }

//     hide() {
//         console.log(`${this.name} hides!`);
//     }

//     stop() {
//         super.stop();
//         this.hide();
//     }
// }


// let animal = new Animal("Cheeta");
// let rabbit = new Rabbit("Rabbit");
// animal.run(100);
// rabbit.run(14);
// animal.stop();
// rabbit.stop();
// console.log(rabbit.speed);


// class Animal {
//     constructor(name) {
//       this.speed = 0;
//       this.name = name;
//     }
//     // ...
//   }
  
//   class Rabbit extends Animal {
  
//     constructor(name, earLength) {
//       this.speed = 0;
//       this.name = name;
//       this.earLength = earLength;
//     }
  
//     // ...
//   }
  
//   let rabbit = new Rabbit("White Rabbit", 10);


// class Animal {

//     constructor(name) {
//       this.speed = 0;
//       this.name = name;
//     }
  
//     // ...
//   }
  
//   class Rabbit extends Animal {
  
//     constructor(name, earLength) {
//       super(name);
//       this.earLength = earLength;
//     }
  
//     // ...
//   }
  
//   // now fine
//   let rabbit = new Rabbit("White Rabbit", 10);
//   console.log(rabbit.name); // White Rabbit
//   console.log(rabbit.earLength); // 10



// class Animal {
//     name = 'animal';
  
//     constructor() {
//       console.log(this.name); 
//     }
// }

// class Rabbit extends Animal {
// name = 'rabbit';
// }

// new Animal(); // animal
// new Rabbit(); // animal
// console.log(new Rabbit().name); // rabbit


// let animal = {
//     name: "Animal",
//     eat() {
//         console.log(`${this.name} eats`);
//     }
// };

// let rabbit = {
//     __proto__: animal,
//     name: "Rabbit",
//     eat() {
//         super.eat();
//     }
// };

// let longEar = {
//     __proto__: rabbit,
//     name: "Long Ear",
//     eat() {
//         super.eat();
//     }
// };


// longEar.eat();


// let animal = {
//     sayHi() {
//         console.log('I am an animal');
//     }
// };

// let rabbit = {
//     __proto__: animal,
//     sayHi() {
//         super.sayHi();
//     }
// };

// let plant = {
//     sayHi() {
//         console.log('I am a plant');
//     }
// };

// let tree = {
//     __proto__: plant,
//     sayHi: rabbit.sayHi
// };

// tree.sayHi();


let animal = {
    eat: function() { // intentionally writing like this instead of eat() {...
      console.log("sometings");
    }
};

let rabbit = {
    __proto__: animal,
    eat() {
        super.eat();
    }
};

rabbit.eat(); 