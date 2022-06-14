"use super";


// class Error {
//     constructor(message) {
//         this.message = message;
//         this.name = "Error";
//     }
// }


// class ValidationError extends Error {
//     constructor(message) {
//         super(message);
//         this.name = "ValidationError";
//     }
// }

// function test() {
//     throw new ValidationError("Whoops!");
// }

// try {
//     test();
// } catch (err) {
//     console.log(err.message);
//     console.log(err.name);
// }



// class Error {
//     constructor(message) {
//         this.message = message;
//         this.name = "Error";
//     }
// }


// class ValidationError extends Error {
//     constructor(message) {
//         super(message);
//         this.name = "ValidationError";
//     }
// }

// function readUser(json) {
//     let user = JSON.parse(json);

//     if (!user.age) {
//         throw new ValidationError("No field: age");
//     }

//     if (!user.name) {
//         throw new ValidationError("No field: name")
//     }

//     return user;
// }

// try {
//     let user = readUser(`{"age": 25}`);
// } catch (err) {
//     if (err instanceof ValidationError) {
//         console.log("Invalid data: " + err.message);
//     } else if (err instanceof SyntaxError) {
//         console.log("JSON Syntax Error: " + err.message);
//     } else {
//         throw err;
//     }
// }


// class ValidationError extends Error {
//     constructor(message) {
//       super(message);
//       this.name = "ValidationError";
//     }
// }
  
// class PropertyRequiredError extends ValidationError {
//     constructor(property) {
//       super("No property: " + property);
//       this.name = "PropertyRequiredError";
//       this.property = property;
//     }
// }
  
//   // Usage
// function readUser(json) {
//     let user = JSON.parse(json);
  
//     if (!user.age) {
//       throw new PropertyRequiredError("age");
//     }
//     if (!user.name) {
//       throw new PropertyRequiredError("name");
//     }
  
//     return user;
// }


// try {
//     let user = readUser(`{"age": 25}`);
// } catch (err) {
//     if (err instanceof ValidationError) {
//         console.log("Invalid data: " + err.message);
//         console.log(err.name);
//         console.log(err.property);
//     } else if (err instanceof SyntaxError) {
//     console.log("JSON Sysntax Error: " + err.message);
//     } else {
//         throw err;
//     }
// }


class MyError extends Error {
    constructor(message) {
        super(message);
        this.name = this.constructor.name;
    }
}

class ValidationError extends MyError {}

class PropertyRequiredError extends ValidationError {
    constructor(property) {
        super("No peroperty: " + property);
        this.property = property;
    }
}

console.log( new PropertyRequiredError("field").name);