// you need to tell me the index of 
// [3, 4] of [[1,2], [4,5], [3, 4]]


// function to check the index of an element from given array
const checkIndex = (arr, ele) => {
    
    // check type of given array
    if (!Array.isArray(arr)) {
        return 'Parameter must be an array';
    }

    // loop through the given array
    for (let i = 0; i < arr.length; i++)
    {   
        // convert element to string to check quqality of arrays
        if (arr[i].toString() == ele.toString()) { 
            return i; // index of element            
        }
    }
    
    return -1; // returns -1 if element is not founded inside array
}

// calling the checkIndex function and printing the output
console.log(checkIndex([[1, 2], [4, 5], [3, 4]], [3, 4]));