"use strict";



// Task 1: Eval-calculator

// Create a calculator that prompts for an arithmetic expression and returns its result.

let evalCalculator = (exp) => {
    return eval(exp);
}

console.log(evalCalculator('4+5*9'));