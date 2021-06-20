const assert = require("assert");
const { add, fizzBuzz, gatherNamesOf } = require("../app");

//add
describe("add", () => {
  it("should add 2 numbers together", () => {
    //Setup
    const inputNumber1 = 2;
    const inputNumber2 = 10;
    const expected = 12;
    //Exercise
    const actual = add(inputNumber1, inputNumber2);
    //Verify
    assert.strictEqual(actual, expected);
  });
  it("should be able to handle only 1 argument number", () => {
    //Setup
    const inputNumber1 = 2;
    const expected = 2;
    //Exercise
    const actual = add(inputNumber1);
    //Verify
    assert.strictEqual(actual, expected);
  });
  it("should be able to handle 0", () => {
    //Setup
    const inputNumber1 = 0;
    const inputNumber2 = 0;
    const expected = 0;
    //Exercise
    const actual = add(inputNumber1, inputNumber2);
    //Verify
    assert.strictEqual(actual, expected);
  });
  it("should return 0 if eitheir argument is not a number", () => {
    //Setup
    const inputNumber1 = "test";
    const expected = 0;
    //Exercise
    const actual = add(inputNumber1);
    //Verify
    assert.strictEqual(actual, expected);
  });
});

//FizzBuzz
describe("fizzBuzz", () => {
  it("it should return Fizz when the value is multiple of 3 but not of 5", () => {
    //Setup
    const number = 21;
    const expected = "Fizz";
    //Exercise
    const actual = fizzBuzz(number);
    //Verify
    assert.strictEqual(actual, expected);
  });
  it("should return Buzz when the value is multiple of 5 but not of 3", () => {
    //Setup
    const number = 25;
    const expected = "Buzz";
    //Exercise
    const actual = fizzBuzz(number);
    //Verify
    assert.strictEqual(actual, expected);
  });
  it("should return FizzBuzz when the value is multiple of 3 and 5", () => {
    //Setup
    const number = 15;
    const expected = "FizzBuzz";
    //Exercise
    const actual = fizzBuzz(number);
    //Verify
    assert.strictEqual(actual, expected);
  });
  it("should return number when the value is not multiple of 3 or 5", () => {
    //Setup
    const number = 14;
    const expected = 14;
    //Exercise
    const actual = fizzBuzz(number);
    //Verify
    assert.strictEqual(actual, expected);
  });
});

//gatherNamesOf
describe("gatherNamesOf", () => {
  it("should return a person name", () => {
    //setup
    let people = [{ name: "Peter" }, { name: "Mary" }, { name: "Jennifer" }];
    //exercise
    let names = gatherNamesOf(people);
    //verify
    assert.deepStrictEqual(names[0], people[0].name);
  });
  it("should return an array", () => {
    //setup
    let people = [{ name: "Peter" }, { name: "Mary" }, { name: "Jennifer" }];
    //exercise
    let names = gatherNamesOf(people);
    //verify
    assert.deepStrictEqual(typeof names, typeof people);
  });
  it("should give me an output with the same length as the input", () => {
    //setup
    let people = [{ name: "Peter" }, { name: "Mary" }, { name: "Jennifer" }];
    //exercise
    let names = gatherNamesOf(people);
    //verify
    assert.deepStrictEqual(names.length, people.length);
  });
});

//CHALLENGE:
describe("gatherNamesOf", () => {
  let people, names;

  beforeEach(() => {
    people = [{ name: "Peter" }, { name: "Mary" }, { name: "Jennifer" }];
    names = gatherNamesOf(people);
  });

  it("should return an array", () => {
    assert.deepStrictEqual(typeof names, typeof people);
  });

  it("should give me the same output length as the input", () => {
    assert.deepStrictEqual(names.length, people.length);
  });

  it("should give me the property name value of the object passed in", () => {
    assert.deepStrictEqual(names[0], people[0].name);
  });
});
