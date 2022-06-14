"use strict";


// Task 1: Finally or just the code?

// 1 segment
// try {
//     work work
// } catch (err) {
//     handle errors
// } finally {
//     cleanup the working space
// }

// 2 segment
// try {
//     work work
// } catch (err) {
//     handle errors
// }

// cleanup the working space

// ANS :- finally always runs the code even perticular code block's execution execution stop before it
function test() {
    try {
        name = "str";
    } catch (err) {
        if (err instanceof ReferenceError) {
            return 2;
        }
        return 5;
    } finally {
        console.log('Clean up!');
    }
}

console.log(test()); // Clean up! 2