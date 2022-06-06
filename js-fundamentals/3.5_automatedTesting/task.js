"use strict"

//Task Whats wrong in the test?

// it("Raises x to the power n", function() {
//     let x = 5;
  
//     let result = x;
//     assert.equal(pow(x, 1), result);
  
//     result *= x;
//     assert.equal(pow(x, 2), result);
  
//     result *= x;
//     assert.equal(pow(x, 3), result);
// });

describe("Raises x to power n", () => {
    it("5 in the power of 1 is equal to 1", () => {
      assert.equal(pow(5, 1), 5);
    });
  
    it("5 in the power of 2 is equal to 25", () => {
      assert.equal(pow(5, 2), 25);
    });
  
    it("5 in the power of 3 is equal to 125", () => {
      assert.equal(pow(5, 3), 125);
    });
});