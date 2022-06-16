"use strict";


//  Task : Error in setTimeout

//what do you think? Will the .catch trigger? 


new Promise((resolve, reject) => {
    setTimeout(() => {
        throw new Error("Whoops!");
    }, 1000);
}).catch(err => console.log(err));


// Ans : catch will not handle this error before catch block has been executed 
// but error accure 1 second after so error will be handled by engine and become 
// a global object