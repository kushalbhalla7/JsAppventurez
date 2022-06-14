////// static properties and methods



/////   Task 1: class extends object
// As we know, all objects normally inherit from Object.prototype 
// and get access to "generic" object methods like hasOwnProperty etc.


class Rabbit extends Object{

    constructor(name) {
        super();
        this.name = name;
    }
}

let rabbit = new Rabbit("Rab");

console.log( rabbit.hasOwnProperty('name') ); 

// Answer because if we are inhereting another 
// class we should call super inside constructor for constructor overriding