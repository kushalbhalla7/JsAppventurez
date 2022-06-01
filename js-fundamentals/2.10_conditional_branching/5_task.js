"use strict"

// Task 5:  Rewrite this if using the conditional operator '?':

//task in if else
let login = prompt('Enter value for loggin');
let message;

if (login == 'Employee') {
  message = 'Hello';
} else if (login == 'Director') {
  message = 'Greetings';
} else if (login == '') {
  message = 'No login';
} else {
  message = '';
}

alert(message);

//peforme the same task using conditional operator '?'

let login1 = prompt()
let message1;

message1 = (login1 == 'Employee') ? 'Hello' : 
  (login1 == 'Director') ? 'Greetings' :
  (login1 == ' ') ? 'No login' : ' ';

alert(message1);