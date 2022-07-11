// you need to tell me the occurrence of \
// arry element ['a', 'b', 'c', 'a', 'b', 'b']


//function to get occurrence of elements of an array
const occurrence = (arr) => {

    // sample object to store occurrence 
    let obj = {};

    // loops through the array
    // 1st loop to get value 
    // 2nd loop to compare with each element
    for (let i = 0; i < arr.length; i++) {
        let count = 0;

        for (let j = 0; j < arr.length; j++) {
            if (arr[i] == arr[j]) {
                count++;
            }
        }

        obj[arr[i]] = count; 
    }

    return obj;
}


console.log(occurrence(['a', 'b', 'c', 'a', 'b', 'b']))