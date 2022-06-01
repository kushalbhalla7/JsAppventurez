"use strict"

// let age = prompt('What\'s your age?');

// if(age >= 18) {
//     alert("You can vote now");
// } else {
//     alert('You cannot vote');
// }

// if(NaN) {
//     alert('Done with it');
// }

// if(!undefined) {
//     alert('Done with it');
// }

// if(null) {
//     alert('Done with it');
// }

// let age = prompt('What\'s your current age', 20);

// let eligible = age >= 18 ? true : false;
// alert(eligible)

let age = prompt('age?', 18);

let message = (age < 3) ? 'Hi bady!' :
    (age < 18) ? 'Hello!' :
    (age < 100) ? 'Greetings!' :
    "What an unusual day!";

alert(message);

if(age < 3) {
    alert('Hi baby!');
} else if (age < 18){
    alert('Hello!');
} else if (age <100) {
    alert('Greetings!')
}