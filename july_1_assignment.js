// Task for today : 01 JULY 2022

// Given an array of integers, keep a total score based on the following:
// 1. Add 1 point for every even number in the array
// 2. Add 3 points for every odd number in the array, except for the number "5"
// 3. Add 5 points every time the number "5" appears in the array
// 4. Add 1 point for every 0 in  the array

// Input: [1, 2, 3, 4, 5]  Output: 13
// Input: [17, 19, 21] Output: 9
// Input: [5, 5, 5] Output: 15


// Solution 1 : For loop
let array = [1, 2, 4, 9, 5, 5, 0, "kushal"];
let score = 0;

//looping through all array element
for (let el = 0; array.length > el; el++) {
    
    if(array[el] === 0 || array[el] % 2 === 0) {  //either value is 0(which is even too) or even, score will be increased by one
        score += 1;
    } else { // 
        if(array[el] === 5) {
            score += 5;
            continue;
        }
        score += 3;
    }
}
alert(score); //19


// Solution 2 : While loop

let array1 = [1, 2, 4, 9, 5, 5, 0];
let score1 = 0;
let el = 0; //looping through all array element

while(array1.length > el) {
    
    if(array1[el] === 5) {  //checks for number is 5
        score1 += 5;
    } else if(array1[el] % 2 === 0) { //checks for number is even (note 0 is alos a even number)
        score1 += 1;
    } else { //checks for number is odd
        score1 += 3;
    }
    el++;
}
alert(score1); //19


//Solution 3 : Ternary operator

let array2 = [1, 2, 4, 9, 5, 5, 0];
let score2 = 0;
let index = 0;

do{
    score2 = (array1[index] === 5) ? score2 + 5 : //checks for value is quals to 5
        (array1[index] % 2 === 0) ? score2 + 1 : //checks for value is even 
        score2 + 3; //now value will be a odd only
    index++;
} while (index < array2.length);
alert(score2); //19
