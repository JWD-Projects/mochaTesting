/*
 * You should write Mocha code that will test the functionalities of add() and fizzBuzz() functions.
 ** Don't forget to initialize npm, install Mocha, and change the scripts in the package.json to run the test suite <command npm> test.
 *** Try to use TDD - test code, implement code, refactor the code.
 */

/*
 *  Implement the add function as needed to guarantee that:
      1 - add two arguments
      2 - handles only one argument
      3 - handles 0 as arguments
      4 - returns 0 if any of the arguments in not a number
 */
const add = (x = 0, y = 0) => {
  // best approach is typeof since isNaN evaluates to false for a number string e.g. '123' 
  if ((typeof x !== 'number') || (typeof y !== 'number') ) {
    return 0;
  } 
    return x + y;
  

};
/*
  * Write a program that prints the numbers. 
      1 - numbers multiples of three prints “Fizz” instead of the number 
      2 - numbers multiples of five prints “Buzz” instead of the number. 
      3 - numbers which are multiples of three and five prints “FizzBuzz”
      4 -  and numbers that are either multiple of three or five prints the number.
      Ex: 1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz, ...
 */
const fizzBuzz = () => {};

/*Implement the gatherNamesOf function as needed to guarantee that:
  1- the function receives an array of objects with people names as a parameter and returns the property name value.
  Ex: The array of objects is: [{name: 'John'}, {name:'Patricia'}]. It should return ['John', 'Patricia'];
*/
const gatherNamesOf = () => {};

module.exports = { add, fizzBuzz, gatherNamesOf };
