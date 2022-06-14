

////// instanceof ///////////


// class User {}
// console.log(new User() instanceof User);;


// function Rabbit() {}
// console.log( new Rabbit() instanceof Rabbit );


// let obj = {};
// console.log(obj instanceof Object);

// console.log(obj.__proto__ === User.prototype.__proto__);


let user = {
    [Symbol.toStringTag]: "User"
};

console.log( {}.toString.call(user) );