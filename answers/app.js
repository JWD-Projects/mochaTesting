/*
 * You should write Macha code that will test the functionalities of add() and fizzBuzz() functions.
 ** Don't forget to initialize npm, install Mocha, and change the scripts in the package.json to run the test suite <command npm>test.
 *** Try to use TDD - test code, implement code, refactor the code.
*/
/*
Implement the add function as needed to guarantee that:
1 - add two arguments
2 - handles only one argument
3 - handles 0 as arguments
4 - returns 0 if any of the arguments in not a number
*/
const add = (a = 0, b = 0) => {
    if(typeof a !== 'number' || typeof b !== 'number'){
      return 0;
    }
    return a + b;
   }
   /*
   Write a program that prints the numbers.
   1 - numbers multiples of three prints “Fizz” instead of the number
   2 - numbers multiples of five prints “Buzz” instead of the number.
   3 - numbers which are multiples of three and five prints “FizzBuzz”
   4 -  and numbers that are either multiple of three or five prints the number.
   Ex: 1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz, ...
   */
   const fizzBuzz = (number) => {
     if((number % 3 == 0) && (number % 5 == 0)){
       return 'FizzBuzz';
     }
     if (number % 3 == 0) {
       return "Fizz";
     }
     if (number % 5 == 0) {
       return "Buzz";
     }
     return number;
   }
   module.exports={add, fizzBuzz};
  