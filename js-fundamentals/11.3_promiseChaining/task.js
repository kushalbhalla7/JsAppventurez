"use strict";




// Task : promise: then versus catch

//Any these code fragments equal? In the other words, do they begave the same way in any circumstances, for any handler functiona?


//  1 code
promise.then(f1).catch(f2);

// 2 code 
primise.then(f1, f2);

//Ans no : because in 1, then expecting one output f1 and catch expecting error object as f2
// but in 2, then expecting two output f1, and f2 and for error object there is no catch