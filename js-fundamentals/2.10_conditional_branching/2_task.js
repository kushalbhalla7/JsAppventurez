"use strict"

/* Task 2:  write the code which asks: ‘What is the “official” name of JavaScript?’
    If the visitor enters “ECMAScript”, then output “Right!”, otherwise – output: “You don’t know? ECMAScript!”
*/

//getting user answer
let name = prompt('What is the \"offical\" name of JavaScript?');

//checking user answer
if(name === "ECMAScript") {
    alert("Right!");
} else {
    alert("You don\'t know? ECMAScript!");
}
