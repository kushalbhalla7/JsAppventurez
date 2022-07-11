// You have a range of 0-5 you need to find the missing
// number in this array [4, 3, 1, 0, 5];


// check function for returns missing element form given array
// arr: sample array
// from: range starts
// to: range ends
const check = (arr, from, to) => {

    // check type of given array
    if (Array.isArray(arr)) {
        return 'Parameter must be an array';
    }

    // a array to contains all missing elements
    let missingEles = [];

    for (let i = from; i <= to; i++) { // loop through the range
        if (arr.includes(i)) { // check any range number is included by arr or not;
            continue;
        } else {
            missingEles.push(i); // number is not included, will be pushed to missingEles array
        }
    }

    if (missingEles.length != 0) {
        return `Missing numbers in given array ${missingEles}`;
    }

    return `Every numbers are present inside the given array`
}


// calling check function and printing the output
console.log(check([4, 2, 4, 3, 0, 1], 0, 4));