//Import assert
const assert = require("assert");
//Import functions from app.js
const {add, fizzBuzz, gatherNamesOf } = require('../app')
/*
   * Create unit tests for the add function
   1 - should add 2 numbers as arguments
   2 - should handle only one number as arguments
   3 - should be able to accept 0 as arguments
   4 - should return 0 if one argument is not a number
 */
describe('Add', () => {
  it('should add 2 numbers as arguments', () => {
    //setup
    let num1 = 12;
    let num2 = 20;
    let expectedResult = 32;
    //exercise
    let result = add(num1, num2);
    //verify
    // equal not working use strict equal instead
    assert.strictEqual(result, expectedResult)
  })

  it('should handle only one number as arguments', () => {
    //setup
    let number = 3;
    let expected = 3;
    //exercise
    let result = add(number);
    //verify
    assert.strictEqual(result, expected)
  })

  it('should be able to accept 0 as arguments', () => {
    //setup
    let num1 = 0;
    let num2 = 0;
    let expected = 0;
    //exercise
    let result = add(num1, num2);
    //verify
    assert.strictEqual(result, expected)
  })

  it('should return 0 if one argument is not a number', () => {
    //setup
    let num1 = '23';
    let num2 = 3;
    let expected = 0;
    //exercise
    let result = add(num1, num2);
    //verify
    assert.strictEqual(result, expected)
  })

  
});
/*
  * Create unit tests for FizzBuzz
  1 - You should create an unit test for each functionality of the FizzBuzz function
*/


/* Create a unit test for the gatherNamesOf function.
  1- It should should return an array
  2- It should give me the same output length as the input
  3- It should give me the property name value of the object passed in
  * CHALLENGE: use beforeEach method to write a more concise test code.
 */
