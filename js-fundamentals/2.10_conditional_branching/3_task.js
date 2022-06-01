"use strict"

/* Task 3:  write the code which gets a number via prompt and then shows in alert:
    1, if the value is greater than zero,
    -1, if less than zero,
    0, if equals zero.
*/

//getting a number
let number = prompt('Please enter a number');

//checking the number
if(number > 0) {
    alert(1);
} else if(number < 0) {
    alert(-1);
} else {
    alert(0);
}
