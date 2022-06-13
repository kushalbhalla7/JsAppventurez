


// ///  Task 1: Error creating an instance

// class Animal {

//     constructor(name) {
//         this.name = name;
//     }

// }

//  class Rabbit extends Animal {

//     constructor(name) {
//         super(name);  // inheriting only name field from Animal class
//         this.created = Date.now();
//     }
// }

// // createing an instance of Rabbit class
// let rabbit = new Rabbit("Rabbit");
// console.log(rabbit.name);




/// Task 2: extended clock

class Clock {

    constructor({template}) {
        this.template = template;
    }

    render() {
        let date = new Date();

        let hours = date.getHours();
        if (hours < 10) hours = '0' + hours;

        let mins = date.getMinutes();
        if (mins < 10) mins = '0' + mins;

        let secs = date.getSeconds();
        if (secs < 10) secs = '0' + secs;

        let output = this.template
        .replace('h', hours)
        .replace('m', mins)
        .replace('s', secs);

        console.log(output);
    }

    stop() {
        clearInterval(this.timer)
    }

    start() {
        this.render();
        this.timer = setInterval(() => this.render(), 1000);
    }
}

// extend Clock class to ExtendedClock class
class ExtendedClock extends Clock {

    constructor(template, precision) {
        super(template); // override class fields
        this.precision = precision;
    }

    start() {
        super.render(); // inheriting render method
        this.timer = setInterval(() => this.render(), this.precision);
    }
}

new ExtendedClock({template: 'h:m:s'}, 1000).start(); // start clock 