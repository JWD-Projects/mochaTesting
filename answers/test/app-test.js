const assert = require('assert');
const {add, fizzBuzz} = require('../app');
 
describe('the add function', function(){
 it('should add 2 numbers together', function(){
   //Setup
   const inputNumber1 = 2;
   const inputNumber2 = 10;
   const expected = 12
   //Exercise
   const actual = add(inputNumber1, inputNumber2)
   //Verify
   assert.strictEqual(actual, expected);
 })
 it('should be able to handle only 1 argument number', function(){
   //Setup
   const inputNumber1 = 2;
   const expected = 2
   //Exercise
   const actual = add(inputNumber1)
   //Verify
   assert.strictEqual(actual, expected);
 });
 it('should be able to handle 0', function(){
   //Setup
   const inputNumber1 = 0;
   const inputNumber2 = 0;
   const expected = 0 ;
   //Exercise
   const actual = add(inputNumber1, inputNumber2)
   //Verify
   assert.strictEqual(actual, expected);
 });
 it('should return 0 if eitheir argument is not a number', function(){
   //Setup
   const inputNumber1 = 'test';
   const expected = 0;
   //Exercise
   const actual = add(inputNumber1);
   //Verify
   assert.strictEqual(actual, expected);
 });
});
 
//FizzBuzz
describe('FizzBuzz', function(){
 it('it should return Fizz when the value is multiple of 3 but not of 5', function(){
   //Setup
   const number = 21;
   const expected = 'Fizz';
   //Exercise
   const actual = fizzBuzz(number);
   //Verify
   assert.strictEqual(actual, expected);
 });
 it('should return Buzz when the value is multiple of 5 but not of 3', function() {
   //Setup
   const number = 25;
   const expected = 'Buzz';
   //Exercise
   const actual = fizzBuzz(number);
   //Verify
   assert.strictEqual(actual, expected);
 });
 it('should return FizzBuzz when the value is multiple of 3 and 5', function() {
   //Setup
   const number = 15;
   const expected = 'FizzBuzz';
   //Exercise
   const actual = fizzBuzz(number);
   //Verify
   assert.strictEqual(actual, expected);
 });
 it('should return number when the value is not multiple of 3 or 5', function(){
   //Setup
   const number = 14;
   const expected = 14;
   //Exercise
   const actual = fizzBuzz(number);
   //Verify
   assert.strictEqual(actual, expected);
 })
 
})
 
